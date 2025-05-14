var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ch-syllabus",
  "level": "1",
  "url": "ch-syllabus.html",
  "type": "Chapter",
  "number": "",
  "title": "Course Syllabus",
  "body": " Course Syllabus   Welcome Math 121 at Fort Lewis College.    Course Information      Course Title : Precalculus     Course Number : MATH 121     Credits : 4    Section 1 Time and Room(s): 8:00-8:55am, MWF Noble 110, Th Noble 160   Section 2 Time and Room(s): 10:10-11:05am, MWF Noble 110, Th Berndt 340   Section 3 Time and Room(s): 11:25am-12:20pm, MWF Noble 110, Th Berndt 340   Section 4 Time and Room(s): 2:30-3:25pm, MWF Noble 110, Th Berndt 340   Instructors:  Sections 1 and 3 - Erich McAlister (mcalister_e@fortlewis.edu), Sections 2 and 4 - Levi Lorenzo (email)      Course Description  This course covers the topics in algebra and trigonometry necessary for students who plan to enroll in MATH 221. Topics include functions, compositions and inverses, and domain and range. Polynomial, rational, exponential, logarithmic, and trigonometric functions are examined in depth, with an emphasis on symbolic methods, parameters that describe each family of functions, and multiple representations of functions (algebraic, numerical, graphical, and verbal representations).    Instructional Format  This is a face-to-face course, which means we will meet in person.    Course Materials  Required Text: Functions Modeling Change: A Preparation for Calculus - 6th Edition by Connally et. al. The text    Student Office Hours     Erich McAlister's Office Hours:      Levi Lorenzo's Office Hours:       Feedback and Communication  Communication of all course information will occur via Canvas as well as in class. Most assignments will be submitted and graded online in Canvas or Webwork.   "
},
{
  "id": "course-info-2",
  "level": "2",
  "url": "ch-syllabus.html#course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Course Title Course Number Credits Section 1 Time and Room(s): Section 2 Time and Room(s): Section 3 Time and Room(s): Section 4 Time and Room(s): Instructors: "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1  This week we covered the following topics:  "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2  This week we covered the following topics in the second week.  "
},
{
  "id": "Activity-magic-beans",
  "level": "1",
  "url": "Activity-magic-beans.html",
  "type": "Worksheet",
  "number": "",
  "title": "Magic Beans",
  "body": " Magic Beans   You have traded your cow for 5 magic chocolate covered espresso beans. Each night at midnight, each bean splits into three beans. To take advantage of this, you eat 8 beans each morning for breakfast. You wonder how many beans you will have after breakfast 30 days after you traded your cow.  Let be the sequence of number of beans you have days after trading your cow, (after breakfast, before midnight; take ).      Write out the first few terms of the sequence. Then give a recursive definition for the sequence and explain how you know it is correct.      What do you notice about all elements of the sequence? Will they all be ...? Prove your conjecture by mathematical induction.        Find a closed formula for and prove it is correct using induction.     "
},
{
  "id": "Activity-magic-beans-3-1",
  "level": "2",
  "url": "Activity-magic-beans.html#Activity-magic-beans-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Write out the first few terms of the sequence. Then give a recursive definition for the sequence and explain how you know it is correct.   "
},
{
  "id": "Activity-magic-beans-3-2",
  "level": "2",
  "url": "Activity-magic-beans.html#Activity-magic-beans-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  What do you notice about all elements of the sequence? Will they all be ...? Prove your conjecture by mathematical induction.   "
},
{
  "id": "Activity-magic-beans-4-1",
  "level": "2",
  "url": "Activity-magic-beans.html#Activity-magic-beans-4-1",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Find a closed formula for and prove it is correct using induction.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
