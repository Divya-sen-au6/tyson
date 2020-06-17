
# Bitcoin-Alert-Based-on-Python

Bitcoin telegram notification using IFTTT services
Bitcoin Price Notifications

Telegram link: https://t.me/divyaz

Introduction

Bitcoin emerged out of the 2008 global economic crisis when big banks were caught misusing borrowers' money, manipulating the system, and charging exorbitant fees. To address such issues, Bitcoin creators wanted to put the owners of bitcoins in-charge of the transactions, eliminate the middleman, cut high interest rates and transaction fees, and make transactions transparent. They created a distributed network system, where people could control their funds in a transparent way.
Bitcoin has grown rapidly and spread far in a relatively short period of time. Across the world, companies from a large jewellery chain in the US, to a private hospital in Poland, accept bitcoin currency. Multi-billion-dollar corporations such as Dell, PayPal, Microsoft, Expedia, etc., are dealing in bitcoins. Websites promote bitcoins, magazines are publishing bitcoin news, and forums are discussing cryptocurrencies and trading in bitcoins. Bitcoin has its own Application Programming Interface (API), price index, trading exchanges and exchange rate.
However, there are issues with bitcoins such as hackers breaking into accounts, high volatility of bitcoins, and long transaction delays. Elsewhere, particularly people in third world countries find Bitcoins as a reliable channel for transacting money bypassing pesky intermediaries.


What is IFTTT?:
   If This Then That, also known as IFTTT is a freeware web-based service that creates chains of simple conditional statements, called applets.
   An applet is triggered by changes that occur within other web services such as Gmail, Facebook, Telegram, Instagram, or Pinterest.

What is Telegram?
Telegram is a cloud-based instant messaging and voice over IP service. Telegram client apps are available for Android, iOS, Windows Phone, Windows NT, macOS and Linux. Users can send messages and exchange photos, videos, stickers, audio and files of any type.
Telegram's client-side code is open-source software but the source code for recent versions is not always immediately published, whereas its server-side code is closed-source and proprietary. The service also provides APIs to independent developers. In March 2018, Telegram stated that it had 200 million monthly active users. 
Default messages and media in Telegram are encrypted when stored on its servers, but can be accessed by the Telegram service provider, who holds the encryption keys. In addition Telegram provides optional end-to-end encrypted "secret" chats between two online users, yet not for groups or channels. 
The client-server communication is also encrypted. The service provides end-to-end encryption for voice calls. 


Project Overview:

	This Project will send notification of bitcoin latest price for every one hour.
	The notifications will be sent to telegram channel “Divyaz_Bitcoin_Alert”.
	The channel is global and anyone can access the channel and get regular updates of bitcoin prices. 


Features: 

	Anyone with the link can join and chat along the channel.
	This Project is alive forever.



Working Procedure:

•	The project runs in ‘Python anywhere console’, which will keep the code run alive.
	The Project is Divided into Four Modules:

	Get data Module
	Format Date Module
	Send Data to IFTTT
	Main Module 
	Get data Module – Here I have used request module to collect data from source(‘blockchain.com’), Once it gets data it will convert the data into json format which is returned back to the function.
	Format Data Module – The main objective of this module is to format the notification message which will be sent to users.
	Send Data to IFTTT – Here the formatted data is sent to users as notifications once it acquires data from previous module.
	Main – Here it will ask for the server maintainer to enter the country code.

•	IFTTT Applets:

	Webhooks and Telegram services are used here. 
	When an event is occurred in the webhooks it will send the event value to telegram.
 


•	Result:
 
	Asking the server maintainer to enter country code
 
	Hosted Server Page.
 
	Telegram Channel Message which is obtained by IFTTT.
 
	Notifications in telegram

Get Data Module:

     User's input is taken by using the function of Tkinter. A graphical user Interface.
     Tkinter is the standard GUI library for Python. Python when combined with Tkinter provides a fast and easy way to create GUI applications. Tkinter provides a powerful object-oriented interface to the Tk GUI toolkit. ... Add one or more of the above-mentioned widgets to the GUI application.


# AttainU (Woodpecker)
# Source Code by Divya Jyoti Sen


Conclusion:
	This Project helps in understanding about IFTTT and it’s services along with Bitcoin price and it’s news.
	Since this project is developed using Python it will help in understanding about modules and using python in real world example.




