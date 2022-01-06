# Another Digital Photo Frame
There are a lot of really great open-source and DIY solutions for wall-mounted digital photo frames, most running [MagicMirror²](https://github.com/MichMich/MagicMirror) on Raspbery Pis. However, we wanted something that allows the user to hold the display and swipe through the photos, in addition to a standard passive slideshow mode. We were able to make one using off-the-shelf hardware and software for a total of $153.

| Feature | Solution |
| --- | --- |
| Cheap touch screen | [Rooted](https://forum.xda-developers.com/t/fire-hd-8-2018-only-unbrick-downgrade-unlock-root.3894256/) Amazon Fire HD 8 running [LineageOS](https://lineageos.org/) |
| Digital photo frame software with passive and interactive modes | [Fotoo](https://play.google.com/store/apps/details?id=com.bo.fotoo&hl=en_US&gl=US) |
| Photos updated via email or cloud storage | [gmail2gdrive](https://github.com/ahochsteger/gmail2gdrive) |
| Wireless charging | DIY wireless charging stand |

## Materials / Costs
![Amazon Fire HD 8 Tablet (2018, 8th Generation)](images/fire_tablet.jpg) | ![Qi Receiver](images/qi_receiver.jpg) | ![Qi Wireless Charger)](images/qi_wireless_charger.jpg) | ![Tablet Stand](images/stand.jpg) | ![E6000 Glue (Black)](images/e6000.jpg) | ![Adhesive Felt (Black)](images/adhesive_felt.jpg) | ![Wooden Dowels (Black)](images/easels.jpg) | ![Fotoo - Digital Photo Frame Photo Slideshow Player](images/fotoo.jpg) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Amazon Fire HD 8 Tablet (2018, 8th Generation)](https://www.amazon.com/gp/product/B0794RHPZD) ($57) | [Micro-USB Qi Charger Receiver](https://www.amazon.com/gp/product/B07C82R5DD) ($11) | [3-Coil Qi Wireless Charger Transmitter](https://www.amazon.com/gp/product/B07M6CRGFP) ($18) | [Tablet Stand](https://www.amazon.com/dp/B06XKCSJDB) ($16) | [E6000 Adhesive (Black)](https://www.amazon.com/Eclectic-Products-Multipurpose-Adhesive-2-Ounce/dp/B07DS6BZR8) ($9) | [Adhesive Felt (Black)](https://www.amazon.com/gp/product/B08CZFQB7M) ($7) | [Square Dowels (Black)](https://www.amazon.com/dp/B00NLOYFTE) ($10) | [Fotoo - Digital Photo Frame Photo Slideshow Player](https://play.google.com/store/apps/details?id=com.bo.fotoo&hl=en_US&gl=US) ($25) |

## Unlock the Tablet
1. Charge tablet
2. Open tablet
3. Follow [these](https://forum.xda-developers.com/t/fire-hd-8-2018-only-unbrick-downgrade-unlock-root.3894256/) instructions to root the tablet.
4. After step 10, if you get this error: "fastboot: error unknown target "recovery", you'll need to follow [this](https://forum.xda-developers.com/t/fire-hd-8-2018-only-unbrick-downgrade-unlock-root.3894256/post-85721447) additional step.
```
fastboot reboot emergency
```
5. At step 12, you'll also want to push two more files:
```
adb push lineage-18.1???.zip /sdcard
adb push open_gaps-arm-11-pico???.zip /sdcard
```
6. After step 20, reboot into recovery again. (Hold down the power button, select Restart, and hold the volume down button.)
7. Select "Wipe", then "Advanced Wipe", and select System, Data, and Cache. Swipe to wipe.
8. Select "Install", then select the Lineage OS ZIP file. Swipe to wipe.
9. Go back and do the same for the Google Apps ZIP file.
10. Reboot System. The hard part is done!
11. Set up WiFi
12. Set up Google Apps
13. If everything looks good, you can snap your back on.

## Install ??
1. Install Fotoo and Google Drive (optional) from the Google Play Store
2. Go to Settings, Apps & notifications, "See all 19 apps".
3. Select each of the following apps and press "Disable". (You may have to select "Force Stop" first.): Android Auto, Browser, Calculator, Calendar, Clock, Contacts, Music, Recorder
4. Go to About Tablet and tap Build Number 7 times to unlock Developer Mode.
5. Go to System and select Developer Options. Turn on "Stay Awake" and turn off "Automatic system updates".
6. In Status Bar, select System icons and turn off everything but WiFi and Battery.
7. In Status Bar, turn off Auto brightness
8. In Display, select Adaptive Brightness, then turn Adaptive Brightness off
9. In Display, select Brightness Level and increase it to 100%
10. In Display, select Screen Saver, select When to Start, and choose Never
11. In Display, select Lock screen, select Notifications on lock screen, and select Don'w show notifications at all
13. In Display, turn off Tap to sleep
14. Remove all apps from except Fotoo and Google Drive from the Home Screen by pressing and dragging them to the top of the screen. Move Fotoo and Google Drive to your preferred location.
15. Long press on an empty part of the home screen wall paper until a menu pops up. Select Home Settings.
16. If you're ready to lock your apps in place, turn off Allow Edit.
17. Select Hidden & Protected Apps and hide everything but Fotoo and Google Drive
18. Turn off Show icon labels on desktop.

## Fotoo Settings
1. On launch, select Google Drive and link your account.
2. For Display Effect, I prefer Scale to Fit Center.
3. For Transition Effect, I prefer Cross Fade.
4. Under Order, I prefer Random (preference given to recent photos)
5. Turn on Launch on boot, and give Fotoo the "draw system overlay" permission when requested

## Set Up Software
1. Install Google Play
2. Download Google Drive
3. Download Fotoo. (The demo version is free. The full featured version is $?.)

## Set Up Script

## Set Up Email Address and Script

## Install Wireless Charging

## Final Touches

\*project by Jason Eppink and Jenna Eppink
