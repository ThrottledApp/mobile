
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
  [[SpeedTest alloc]test:@"okay" block:^(NSString* speed) {
    resolve(speed);
  }];
//    [self testDownloadSpeedWithTimout:5.0 completionHandler:^(CGFloat megabytesPerSecond, NSError *error) {
//        NSString *str = [NSString stringWithFormat:@"%.1f", megabytesPerSecond];
//        NSLog(@"%0.1f; error = %@", megabytesPerSecond, error);
  


}
@end
