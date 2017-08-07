package com.throttled;

import android.os.Handler
import android.os.Looper
import android.webkit.JavascriptInterface
import android.webkit.WebView
import android.webkit.WebViewClient
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import org.jsoup.Jsoup

class RNSpeedTestModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    @ReactMethod
    fun getSpeed(promise: Promise) {
        val handler = Handler(Looper.myLooper())
        class ThrottledJS {
            @JavascriptInterface
            fun processHtml(html: String) {
                val parser = Jsoup.parse(html)
                val wrapper = parser.body().getElementsByClass("wrapper")
                val speedControlsContainer = wrapper[0].getElementsByClass("speed-controls-container centered")
                val speedLeftContainer = speedControlsContainer[0].getElementsByClass("speed-left-container")
                val successElement = speedLeftContainer[0].getElementsByClass("speed-results-container succeeded")
                val speedValue = successElement.text().toInt()
                promise.resolve("$speedValue b/s")
            }
        }

        val webView = WebView(reactApplicationContext)
        webView.settings.javaScriptEnabled = true
        webView.addJavascriptInterface(ThrottledJS(), "Throttled")
        webView.setWebViewClient(object : WebViewClient() {
            override fun onPageFinished(view: WebView, url: String?) {
                super.onPageFinished(view, url)

                handler.postDelayed({
                    view.loadUrl("javascript:window.Throttled.processHtml('<html>'+document.getElementsByTagName('html')[0].innerHTML+'</html>');")
                }, 10000)
            }
        })
        webView.loadUrl("https://fast.com/")
    }

    override fun getName() = "RNSpeedTest"
}
