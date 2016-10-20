# Run Time Permission for Android 6
Ever worried how to deal with the newly introduced Android 6's Run Time Permission in your IONIC app?

If your version of app on playsore is having  "targetSdkVersion" below 23, things would be fine as all the permissions would be granted in bulk while installation.
But if you have submitted a build with "targetSdkVersion = 23", playsore won't accept a roolback of a build with lover sdk version. EVEN IF YOU HAVE SUBMITTED A BUILD FOR BETA TESTING.

You can use the cordova diagnostic plugin to fetch the status of the permissions and prompt the users to grant permission.
This is a small demo of how it is done for fetching the permissions for "location" in android.


![runtimepermission2](https://cloud.githubusercontent.com/assets/7868165/19570274/ea6d7eca-9716-11e6-8485-cd11f9d07d14.jpg)

