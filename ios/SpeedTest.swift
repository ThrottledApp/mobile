//
//  RNSpeedTest.swift
//  Throttled
//
//  Created by uli on 8/6/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

import UIKit
import Erik
import WebKit

@objc
class SpeedTest: NSObject {
  
  func getSpeed(_ okay: NSString, block: @escaping (_ speed: NSString) -> ()) {
      let url = URL(string:"http://www.fast.com")!
      Erik.visit(url: url) { object, error in
        if let e = error {
          print(e)
        } else if let doc = object {
          print("got initial")
        }
      }
      self.transitionBroadcast(success: false, currentSpeed: 0) { speed in
        block(NSString(string: String(speed)))
      }
  }
  
  fileprivate func transitionBroadcast(success: Bool,
                                       currentSpeed: Int,
                                       block: @escaping (_ speed: Int) -> ()) {
    if success {
      print("fuck yeah \(currentSpeed)")
      block(currentSpeed)
    } else {
      Erik.currentContent { (obj, err) -> Void in
        if let error = err {
        }
        else if let apple = obj {
          if let input = apple.querySelectorAll(".speed-results-container.succeeded").first {
            self.transitionBroadcast(success: true, currentSpeed: Int(input.content!)!, block: block)
          } else {
            print("nope")
            sleep(1)
            self.transitionBroadcast(success: false, currentSpeed: 0, block: block)
          }
        }
      }
    }
  }
}
