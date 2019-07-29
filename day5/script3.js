const basicAlarm = (alarmMessage) => {
    return alarmMessage;
}
console.log(basicAlarm("My alarm"));
function myAlarm(Name)
{
    return "hey, "+ Name+ "wake up!";
}
console.log(myAlarm("alarm"))
function momAlarm(Name)
{
    return "hey mom, "+ Name+ "wake up!";
}
console.log (momAlarm("alarm"));
function familyAlarm(Name)
{
    return "hey, "+ Name + "wake up!, 6:30";
}
console.log (familyAlarm("brother","6:30"));
function importantAlarm(Name)
{
    return Name.toUpperCase(); 
}
console.log (importantAlarm("wake up"));
function snoozeAlarm(time)
{
    return time + 1;   
}
console.log ("your alarn have been changed from "+snoozeAlarm(6)-1+"to "+);