import React from 'react';

import './Listing.css';

function MainContent() {
    return (
        <div className="listing-section">
           <div className='maincontent'>
            <div>
               <h2>HTML5</h2><br/><br/>
               <div className='intro'>
               <p>
HTML is an acronym for Hypertext Markup Language. HTML5 was created in order to enable a variety of features that current websites need. HTML5 is simple to implement since there are no substantial changes to the HTML programming paradigm. HTML5 is also backward compatible with older browsers. I mention backward compatibility since HTML5 was built in such a manner that browsers that don’t support it may disregard these constructs.

This industry moves at a breakneck pace. You’ll be left in its wake if you're not cautious. So, in this article, we have discussed all the additional HTML5 features that have been introduced to this programming language to make it a superior alternative to HTML.  </p>
               <img style={{position:"absolute",right:"12px",top:"589px"}} className='img-1' alt="" src="https://www.interviewbit.com/blog/wp-content/uploads/2021/11/image1-13.png" width="350px" height="320px"/>
               </div></div><br/><br/>
            <div>
            <h2 >Top Features of HTML5</h2><br/>
            <div className='features' id="feature-1">
           <h2>Video and Audio Features</h2> 
           <p>HTML5 has two crucial additions: audio and video tags. It enables web developers to include a video or audio file on their pages. The video element in HTML5 may be styled using CSS and CSS. Borders, opacity, reflections, gradients, transitions, transformations, and even animations may all be changed. YouTube also declares video embedding by providing the code to use to embed their videos on other websites. It contributes to the web being increasingly engaged with multimedia. HTML5 includes a new element, the audio tag, which is accessible for use, which is used to embed any audio file into a webpage on the Internet. </p>
            <br/></div>
            <div className='features' id="feature-2">
           <h2>Header and Footer</h2> 
           <p>
These new tags eliminate the requirement for a &lt;div&gt; tag to separate the two parts. The footer appears at the bottom of the page, whereas the header appears at the top. The browser will know what to load first and what to load later if you use the HTML5 elements header and footer.

The header may include the following information:

There are one or more header components (h1 - h6).
Icon or logo
Authorship Information </p>
            <br/></div>
            <div className='features' id="feature-3" >
           <h2>Input tag kinds have been expanded.</h2> 
           <p>Input is an old attribute that has been resurrected in HTML with new values such as email, month, number, range, search, tel, color, week, URL, time, date, DateTime-local, and so on.
<br/><br/>
These are the new values that the input tag may include.<br/><br/>

<ul><li>ContentEditable<br/>
It's a characteristic that allows the user to make changes to the content. It makes determining What You See Is What You Get a breeze. By clicking on the content, you will be able to change it.
</li><br/>
<li>
Progress<br/>
This tag is used to monitor the status of a job while it is being completed. You may use the progress tag in conjunction with JavaScript. It’s similar to a progress bar.
</li><br/>
<li>section<br/>
The section tag is used to split a document into sections or pieces. For instance, an article may include many parts, such as a header, footer, newest news, and a section for the primary material, among others.
</li><br/>
<li>
Main<br/>
Main is a tag that is used to encapsulate the page's primary content. There can't be more than one main tag in a document, and this tag can’t be within the article aside, footer, or header tags. The navigation bar, header, and footer are not included. 
</li></ul>
</p>
<br/></div>
<div className='features' id="feature-4">
<h2>Figure and figcaption</h2> 
<p>Previously, there was no way to add a figure to a document while also providing a caption. It is now semantically possible to include an image into a page together with its description, thanks to the introduction of the figure and figcaption tags. 
<br/><br/>
<h3>Syntax</h3>
<br/>
<div className='example'>
&lt;figure&gt;
&lt;img src="image/image-1.jpg" alt="About ADMEC" /&gt;
    &lt;figcaption&gt;
        &lt;p&gt;This is our institute &lt;/p&gt;
             &lt;/figcaption&gt;
        &lt;/figure&gt;
</div>
 </p>
<br/></div>
<div className='features' id="feature-5">
<h2>Placeholders </h2> 
<p>To make placeholders for text boxes before, we had to use a little JavaScript. Sure, you may customize the value property as you see appropriate at first, but the input will be left blank if the user deletes that content and clicks away. This is fixed by using the placeholder property. </p>
<br/></div>
<div className='features' id="feature-6">
<h2>Preload Videos </h2> 
<p>It's a fantastic function for sharing videos. It describes how to upload the video as well as how long the website will take to load. This informs the browser about the enhancements made to the webpage's user experience. Though this isn't a must-have feature, You should include it. It aids in a more accurate portrayal of the page. </p>
<br/></div>
<div className='features' id="feature-7">
<h2>Controlling the display</h2> 
<p>The display property is used to determine how elements behave. The default values are used if this attribute is not supplied.</p>
<br/></div>
<div className='features' id="feature-8">
<h2>Regular Expressions </h2> 
<p>We may use a regular expression to add a certain pattern as an input. The most frequent pattern, for example, is [A-Za-z] 5,11. It will take both capital and lowercase letters. It also indicates that the minimum character length is five, and the maximum permissible character length is 11.</p>
<br/></div>
<div className='features' id="feature-9">
<h2>Adaptability</h2> 
<p>HTML5 has played a significant part in giving the finest accessibility features to a website since its inception. The usage of the website has been streamlined as a result of this. People with practically any form of handicap, such as vision impairment, color blindness, poor vision, blindness, and so on, may use websites built using HTML5's accessibility capabilities. Validation, for example, is the finest example of giving accessibility in forms. Labels must be clearly indicated.</p>
<br/></div>
<div className='features' id="feature-10">
<h2>Elements that appear inline</h2>
<p>In order to maintain code up to date, these inline items are quite useful:<br/><br/>
<ul>
<li>mark: It draws attention to stuff that has been marked in some manner.</li><br/>
<li>Time: This is used to display the current time and date on the website.</li><br/>
<li>Meter: It indicates how much space on the storage drive is still available.</li><br/>
<li>Progress bar: It allows you to track the progress of a task that has been assigned to you.</li></ul></p>
<br/></div>
<div className='features' id="feature-11">
<h2>Support for Dynamic Pages</h2>
<p>Instead of static websites, dynamic and interactive websites are in demand these days. Several aspects give the website a dynamic feel:
<br/><br/>
<ul>
<li>mark: It draws attention to stuff that has been marked in some manner.</li><br/>
<li>Time: This is used to display the current time and date on the website.</li><br/>
<li>Meter: It indicates how much space on the storage drive is still available.</li><br/>
<li>Progress bar: It allows you to track the progress of a task that has been assigned to you. There are other more aspects that help to make the website dynamic.</li></ul></p>
<br/></div>
<div className='features' id="feature-12">
<h2>Email as a property</h2> 
<p>When we write the kind of email in a form, the browser automatically takes the command from the code to produce an email in the right and valid format. In previous browsers, this was not feasible.</p>
<br/></div>
<div className='features' id="feature-13">
<h2>Cryptographic Nonces</h2> 
<p>We may now apply cryptographic nonces to all styles and scripts in this latest version of HTML. Inside the script and style tags, we normally employ the nonce attribute. This nonce tag, in essence, produces a random number that is only used once.

As a result, every time the page is refreshed, it gets regenerated. It's a fantastic feature since it may be utilized to improve the security of the page's content—this aids in declaring and permitting the website to select a certain script or style.</p>
<br/></div>
<div className='features' id="feature-14">
<h2>Reverse Links </h2> 
<p>With HTML 5.1, the rev property for reverse links is back in play. It essentially enables web users to utilize the link and anchor tag components once again. In addition, it describes the connection between the current document and the linked document in reverse order.</p>
<br/></div>
<div className='features' id="feature-15">
<h2>Images with a width of zero </h2> 
<p>The width of the pictures may now be set to zero by site developers. This function comes in handy when there's no need to reveal them to consumers, such as when monitoring picture files since it would take up more space otherwise. It is recommended to utilize photos with a zero width and an empty alt tag. </p>
<br/></div>
<div className='features' id="feature-16">
<h2>Canvas in HTML5 </h2> 
<p>A canvas is a rectangular area that may be used to conduct pixel-level operations such as drawing a line, box, circle, or executing graphics, among other things. HTML5 now includes support for canvas regions. An example code is shown below. </p>
<br/>
<div className='example'>&lt;canvas id="myCanvas" width="200" height="100"&gt;
	Fallback content, when canvas is not supported by the browser.
&lt;/canvas&gt; </div>
<br/></div>
 </div>

           </div>
          
        </div>
    )
}

export default MainContent;
