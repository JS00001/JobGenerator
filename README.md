# ⭐Find Jobs You Love

 If you are seeing this repository, odds are you have also recently received my job application. In fact, it's likely that I discovered your company using this application, so congratulations for standing out 🎉. For me especially, finding the perfect job can be difficult, so I set out to fix that. 

![carbon (3)](https://user-images.githubusercontent.com/49812749/157169448-5de4de4f-046d-489e-989f-68316b5943dd.png)




## 🚀 Problem
Most companies that use major sites such as Indeed and Glassdoor, are outdated and lack modern technologies. This makes these jobs undesirable for upcoming software engineers who are proficient in the latest technologies.


## ❤️ The Solution
- The first step to a modern company is modern design. One of my favorite websites for finding startup companies that have adapted to the latest technologies is [LandingFolio](https://landingfolio.com)


![image](https://user-images.githubusercontent.com/49812749/157167628-7e41f4bc-30ce-43d0-836f-15d09d6b0a33.png)

- Upon further inspection, I discovered that the site generates its content from its API. The API uses one major query parameter, which is updated based on the user's Y offset. I could use this to fetch all of the company sites that the website stores. 
- Each request returns an array of company objects, each including images, AND a link to the website! Bingo.


![carbon (2)](https://user-images.githubusercontent.com/49812749/157168173-b5c999a1-8378-448a-b537-faab8c1799d3.png)

- Based on experience, I used the assumption that most websites will have their hiring page located at either **https://company.com/jobs** OR **https://company.com/careers**
- For each URL, the program will check if the `/jobs` address returns a **404**. If it does, it will attempt to check the `/careers` address. If neither returns a valid webpage, the program will return the website to be not hiring. If one of the hiring URL's is valid, it will write the entire address to `/data/jobs.txt`


## 🔨 Setup
- Make sure you have `NodeJS` installed.
- Clone this project
- Open a command prompt in the projects folder, and run `npm install`
- Once the installation has completed, run `node index` to run the application.
- The program will begin going through URL's and checking for endpoints that signify that the company is hiring. Results will be outputted in the `data/jobs.txt` file.
