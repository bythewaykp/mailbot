# MailBot
A JavaScript based bot to bulk send mails


Go to https://console.cloud.google.com/
#
> #### 1) Select "API AND SERVICES"
+ Click Enable API and services
+  Search for "Gmail API" and enable
#
> #### 2)  Select "OAuth Consent Screen"
+ choose "External"
+ add mail ids of test users (The app will only be usable by them since it is in development mode)
#

> #### 3) Select "CREDENTIALS"
+ click Create Credentials
+ choose OAuth2 Client ID

+ application type : Web Application
+ authorized redirect URI : https://developers.google.com/oauthplayground/
#
> #### 4) Download the JSON file, rename it as 'credentials.json' and put it in the root folder of the project

#


*NOTE : 'a.txt' contains the line seperated email ids of recepients*
