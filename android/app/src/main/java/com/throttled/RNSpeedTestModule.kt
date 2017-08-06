package com.throttled;

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.throttled.download.FileDownloadTask
import com.throttled.download.ProgressListener
import java.util.concurrent.TimeUnit

class RNSpeedTestModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    @ReactMethod
    fun getSpeed(promise: Promise) {
        val listener = object : ProgressListener {
            val startSeconds = TimeUnit.NANOSECONDS.toSeconds(System.nanoTime())

            override fun update(bytesRead: Long, contentLength: Long, done: Boolean) {
                if (done) {
                    val endSeconds = TimeUnit.NANOSECONDS.toSeconds(System.nanoTime())
                    val elapsedTime = endSeconds - startSeconds
                    val speed = contentLength / elapsedTime
                    promise.resolve("$speed b/s")
                }
            }
        }
        FileDownloadTask(listener).run()
    }

    override fun getName() = "RNSpeedTest"
}
