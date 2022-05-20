# Notes app

![Notes app gif](https://user-images.githubusercontent.com/29425781/154816386-2c00b005-a4ec-4bbb-a4f2-5b17047c0db6.gif)

## About the project

I wanted to create an CRUD project that would allow me to track my notes from #100DaysOfCode challenge on Twitter. 

I followed a [tutorial on YouTube](https://www.youtube.com/watch?v=8KB3DHI-QbM) where I encountered issues as I wanted inputs from two fields. This was also a challenge when it came to searching within the two fields. 

I decided to use Tailwind CSS as it's something I've recently been learning and I really liked how simple it was to create the look of the note component, similar to a window. 

After the initial setup of the notes and saving them to local storage, I added tagging functionality. I could now add and remove multiple tags from each note. 

With the ability to add tags, I thought it would be useful to filter notes by tag so I added a filter button next to the search. 

To create the edit functionality I had to refactor my components so that the form stood alone but also was included in the Note. The Note component contains two further components: the form and the note view. This meant went the edit button was clicked it would show the form and when saved it would show the note view.

![coding-notebook-screenshot](https://user-images.githubusercontent.com/29425781/169498167-48b7c92e-77fa-4218-b7e1-fb470a1242b1.png)

## Technologies used

* React
* HTML
* Tailwind CCS

## Roadmap

1. Save information to a database.
2. Ability to login.
3. Pin notes to the top.

## Contact

Debbie Dann @debbie_digital on Twitter

Project link: [#100DaysOfCode Notes](https://awesome-lamport-4fcaff.netlify.app/)
