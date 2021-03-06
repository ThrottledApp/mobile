
#import "RNSpeedTest.h"
@implementation RNSpeedTest
- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()
RCT_REMAP_METHOD(getSpeed,
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  [[SpeedTest alloc]getSpeed:@"okay" block:^(NSString* speed) {
    resolve(speed);
  }];

}
@end
