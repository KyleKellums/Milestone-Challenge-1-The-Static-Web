console.log("hello main.js");

var blogposts = [
	{
	 Title: "Cohort-18 Demo Day",
	 Copy: "Cohort 18 presented their capstone projects. It was impressive to see how much knowledge the students possessed after 12 weeks of being here. One one hand it was a little daunting to think of all that I did not know.  On the other hand it was encouraging to hear other students say they didn't even know what a terminal was when they started. There was even a student who had never owned a computer before he applied to the program. The students also gave great advice to cohort 19. I consistently heard things like, don't be afraid to ask for help, learn from your teammates, trust the process, and plan, plan, plan. It is amazing to think that I will be where they are in such a short amount of time.",
	 Date: "April 5, 2017"
	},
	{
	 Title: "Benchmark Myself",
	 Copy: "I have heard instructors say several times this past week to benchmark myself. This means that I should not compare myself to others, but measure my own progress. There a many students in our cohort that seem much farther down the road than I am. Although I wish I were amongst the most knowledgable group, I cannot be discouraged by the fact that I am still such a novice. I must honestly assess where I am, what I need to learn and shore up, and take account of my growth every week.",
	 Date: "April 5, 2017"
	},
	{
	 Title: "Learn From Others",
	 Copy: "There will always be people around in this field that know way more than I do. I can't get intimidated or discouraged by this. Instead, I should always ask questions from those who know more than me. Glean from them even when they discuss topics that are over my head. I view it like I would as a musician. I'd always want to surround myself with people that were better than me. It's more difficult to do this when you are a novice. As competency grows it will be increasingly more invigorating to be surrounded by those who are ahead.",
	 Date: "April 5, 2017"
	}
];

var outputBlog = "";

for (var prop in blogposts){
	outputBlog += `<article>
						<h4>${blogposts[prop].Title}</h4>
						<p>${blogposts[prop].Copy}</p>
						<footer>${blogposts[prop].Date}</footer>
					  </article>`;

console.log("outputBlog", outputBlog);
$("#postarea").html(outputBlog);
}










