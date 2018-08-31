// import { Notifications } from 'expo';


// function dateString(){
//     let date = new Date();
//     var yr = date.getFullYear();
//     var day = date.getDate();
//     var mon = date.getMonth();
//     return `${yr}-${mon}-${day}`;
// }



// const createLocalNotification = (title, body) => {
//     return({
//         title,
//         body, // (string) — body text of the notification.
//         ios: { // (optional) (object) — notification configuration specific to iOS.
//             sound: true // (optional) (boolean) — if true, play a sound. Default: false.
//         },
//         android: // (optional) (object) — notification configuration specific to Android.
//             {
//                 sound: true, // (optional) (boolean) — if true, play a sound. Default: false.
//                 //icon (optional) (string) — URL of icon to display in notification drawer.
//                 //color (optional) (string) — color of the notification icon in notification drawer.
//                 priority: 'high', // (optional) (min | low | high | max) — android may present notifications according to the priority, for example a high priority notification will likely to be shown as a heads-up notification.
//                 sticky: false, // (optional) (boolean) — if true, the notification will be sticky and not dismissable by user. The notification must be programmatically dismissed. Default: false.
//                 vibrate: true // (optional) (boolean or array) — if true, vibrate the device. An array can be supplied to specify the vibration pattern, e.g. - [ 0, 500 ].
//             }
//     });
// };


// const createSchedule = (time) => {
//     let sampleDate = new Date(`${dateString()} ${time}`);
//      scheduledDate = sampleDate.getMilliseconds() - (1000);
//      return ({
//          time:scheduledDate,
//      });
// };


// module.exports =() = {
//     Notifications.scheduleLocalNotificationAsync(createLocalNotification("first Notif","it worked"));
// }