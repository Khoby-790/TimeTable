import scheduleData from '../../schedule';
import { AsyncStorage } from 'react-native'


module.exports = {
    storeSchedule: async function() {
        try{
            await AsyncStorage.setItem('schedule', JSON.stringify(scheduleData));
            console.log('Stored successfully');
            this._getSchedule();
        }catch(err){
            throw new Error(err);
        }
    },

    _getSchedule: async function() {
        AsyncStorage.getItem('schedule', (err, schedule) => {
            if(err){
                throw new Error(err);
            }else{
                return schedule;
            }
        })
    }
};