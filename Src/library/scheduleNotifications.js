
import { Notifications } from 'expo';

const createLocalNotification = (title, body) => {
    return({
        title,
        body, // (string) — body text of the notification.
        ios: { // (optional) (object) — notification configuration specific to iOS.
            sound: true // (optional) (boolean) — if true, play a sound. Default: false.
        },
        android: // (optional) (object) — notification configuration specific to Android.
            {
                sound: true, // (optional) (boolean) — if true, play a sound. Default: false.
                //icon (optional) (string) — URL of icon to display in notification drawer.
                //color (optional) (string) — color of the notification icon in notification drawer.
                priority: 'high', // (optional) (min | low | high | max) — android may present notifications according to the priority, for example a high priority notification will likely to be shown as a heads-up notification.
                sticky: false, // (optional) (boolean) — if true, the notification will be sticky and not dismissable by user. The notification must be programmatically dismissed. Default: false.
                vibrate: true // (optional) (boolean or array) — if true, vibrate the device. An array can be supplied to specify the vibration pattern, e.g. - [ 0, 500 ].
            }
    });
};


const createSchedule = (time) => {
    let date = new Date('2018-08-30' + time + 'z');
    let scheduledTime = date.getMilliseconds() - (6000*60);
    return scheduledTime;
};


module.export = {
  Notifications.scheduleLocalNotificationAsync(createLocalNotification("hey notify","it worked again"),createSchedule('21:20:00'));
}
