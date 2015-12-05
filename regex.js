// 1. Password Strength

^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$
/*
Checking a password’s strength is often subjective so there is no absolute correct answer. But I feel this regex snippet is a great starting point if you don’t want to write your own password strength checker from scratch.
*/

// 2. Hexadecimal Color

\#([a-fA-F]|[0-9]){3, 6}
/*
The field of web development is ubiquitous with hex color codes. This regex snippet can be used to pull hex code matches from any string for any purpose.
*/

// 3. Validate E-mail Address

/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm
/*
One of the most common tasks for a developer is to check if a string is formatted in the style of an e-mail address. There are many different variants to accomplish this task, so this SitePoint link offers two distinct code snippets for checking e-mail syntax against a string.
*/

//4. IPv4 Address

/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/
/*
Similar to an e-mail address is the typical IP address used to identify a specific computer accessing the Internet. This regular expression will check a string to see if it follows the IPv4 address syntax.
*/

// 5. IPv6 Address

(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))
/*
Alternatively you might want to check an address for the newer IPv6 syntax with this more advanced regex snippet. The difference is minor albeit vital during development.
*/

// 6. Thousands Separator

/\d{1,3}(?=(\d{3})+(?!\d))/g
/*
Traditional numbering systems require a comma, period, or some other mark every third digit in a larger number. This regex code operates on any number and will apply any mark you choose to every third digit separating into thousands, millions, etc.
*/

//7. Prepend HTTP to Hyperlink

if (!s.match(/^[a-zA-Z]+:\/\//))
{
    s = 'http://' + s;
}
/*
Whether you’re working in JavaScript, Ruby or PHP, this regular expression can prove very helpful. It will check any URL string to see if it has an HTTP/HTTPS prefix, and if not, prepend it accordingly.
*/

//8. Pull Domain from URL

/https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i
/*
Every website domain contains the initial protocol(HTTP or HTTPS) and oftentimes a subdomain plus the additional page path. You can use this snippet to cut through all of that and return just the domain name without extra frills.
*/
//9. Sort Keywords by Word Count


^[^\s]*$        matches exactly 1-word keyword
^[^\s]*\s[^\s]*$    matches exactly 2-word keyword
^[^\s]*\s[^\s]*     matches keywords of at least 2 words (2 and more)
^([^\s]*\s){2}[^\s]*$    matches exactly 3-word keyword
^([^\s]*\s){4}[^\s]*$    matches 5-words-and-more keywords (longtail)
/*
Users of Google Analytics and Webmaster Tools will really enjoy this regular expression. It can sort and organize keywords based on the number of words used in a search.

This can be numerically specific (i.e. only 5 words) or it can match a range of words (i.e. 2 or more words). When used to sort analytics data this is one powerful expression.
*/

//10. Find a Valid Base64 String in PHP

\?php[ \t]eval\(base64_decode\(\'(([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?){1}\'\)\)\;

/*
If you’re a PHP dev then at some point you may need to parse through code looking for Base64 encoded binary objects. This snippet can be applied to all PHP code and will check for any existing Base64 strings.
*/

//11. Valid Phone Number

^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$

/*
Short, sweet, and to the point. This regex code will validate any traditional phone number syntax based primarily on the American style of phone numbers.

Since this can turn into a fairly complicated subject I recommend skimming this Stack thread for more detailed answers.
*/

//12. Leading & Trailing Whitespace

^[ \s]+|[ \s]+$
Use this code snippet to pull out leading/trailing whitespace from a string. This may not be a big deal but sometimes it can affect output when pulled from a database or applied to another document encoding.

13. Pull Image Source
1
\< *[img][^\>]*[src] *= *[\"\']{0,1}([^\"\'\ >]*)
/*
If for some reason you need to pull out an image’s source straight from HTML, this code snippet is the perfect solution. Although it can run smoothly on the backend, frontend JS devs should instead rely on jQuery’s .attr() method for the frontend.
*/

//14. Validate Date in DD/MM/YYYY Format

^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$
/*
Dates are tricky because they can appear as text+numbers, or just as numbers with different formats. PHP has a fantastic date function but this isn’t always the best choice when pulling a raw string. Consider instead using this regular expression made for this specific date syntax.
*/

//15. YouTube Video ID Match

/http:\/\/(?:youtu\.be\/|(?:[a-z]{2,3}\.)?youtube\.com\/watch(?:\?|#\!)v=)([\w-]{11}).*/gi
/*
YouTube has kept the same URL structure for years because it just works. It’s also the most popular video sharing site on the web, so YouTube videos tend to drive the most traffic.

If you need to pull out a YouTube video ID from a URL this regex code is perfect and should work perfectly for all variants of YouTube URL structures.
*/

// 16. Valid ISBN

/\b(?:ISBN(?:: ?| ))?((?:97[89])?\d{9}[\dx])\b/i
/*
Printed books follow a system of numbering known as ISBN. This can get rather tricky when you consider differences between ISBN-10 and ISBN-13.

However this incredible snippet allows you to validate an ISBN number and check if it’s ISBN10 or 13. All code is written in PHP so this should prove exceptionally useful to web developers.
*/

// 17. Check Zip Code

^\d{5}(?:[-\s]\d{4})?$
/*
The creator of this snippet not only released his work for free, but he also took the time to explain it. You’ll find this snippet useful whether you’re matching a typical 5-digit zip code or the lengthier 9-digit version.

Keep in mind this is meant primarily for the American system of zip codes so this may require adjustments for other countries.
*/

//18. Valid Twitter Username

/@([A-Za-z0-9_]{1,15})/
/*
Here’s a very small code snippet for matching against Twitter usernames found in a string. It checks for @mention syntax which is perfect for automatically scanning the contents of a tweet (or tweets).
*/

// 19. Credit Card Numbers

^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$
/*
Validating a credit card number often requires a secure platform hosted elsewhere online. But regex can be used for the minimal requirements of a typical credit card number.

A more comprehensive list of codes for individual cards can be found here. This includes Visa, MasterCard, Discover, and many others.
*/

// 20. Find CSS Attributes
1
^\s*[a-zA-Z\-]+\s*[:]{1}\s[a-zA-Z0-9\s.#]+[;]{1}
/*
It may be rare to run regex over CSS but it’s not an incredibly odd situation either.

This code snippet can be used to pull out every matching CSS property and value from individual selectors. It can be used for any number of reasons, possibly to view chunks of CSS or to remove duplicate properties.
*/

// 21. Strip HTML Comments

<!--(.*?)-->
/*
If for whatever reason you need to remove all comments from a block of HTML, this is the regex code to use. Along with the expression you’ll find a PHP example using preg_replace.
*/

// 22. Facebook Profile URL

/(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/
/*
Facebook is incredibly popular and has gone through many different URL schemes. In a situation where you’re taking profile URLs from users it might be helpful to parse strings and confirm that they’re structured properly. This snippet can do exactly that and it’s perfect for all FB-style links.
*/

// 23. Check version of Internet Explorer

^.*MSIE [5-8](?:\.[0-9]+)?(?!.*Trident\/[5-9]\.0).*$
/*
Microsoft’s move over to Edge has not been unanimous and many people still rely on classic Internet Explorer. Developers often need to check for versions of IE to handle inconsistencies with rendering engines.

This snippet can be used in JavaScript to test a browser agent based on which version of Internet Explorer (5-11) is being used.
*/

// 24. Extract Price

/(\$[0-9,]+(\.[0-9]{2})?)/
/*
Pricing comes in a variety of formats that contain decimals, commas, and currency symbols. This regular expression can check all these different formats to pull out a price from any string.
*/

// 25. Parse E-mail Header

/\b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}\b/i
/*
With this single line of code you can parse through an email header to pull out “to” information from the header. It can be used in tandem with multiple emails joined together.

If you prefer to avoid regex for this task you might instead rely on a parsing library.
*/

// 26. Match a Particular Filetype

/^(.*\.(?!(htm|html|class|js)$))?[^.]*$/i
/*
When you’re dealing with various file formats like .xml, .html, and .js, it can help to check files both locally and uploaded by users. This snippet pulls a file extension to check if it’s valid from a series of valid extensions which can be changed as needed.
*/

// 27. Match a URL String

/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
/*
This snippet can be used both for HTTPS and HTTP strings to check if the text matches up to the traditional TLD domain syntax. There’s also a simple implementation of this regex using JavaScript’s RegExp.
*/

// 28. Append rel=”nofollow” to Links

(<a\s*(?!.*\brel=)[^>]*)(href="https?://)((?!(?:(?:www\.)?'.implode('|(?:www\.)?', $follow_list).'))[^"]+)"((?!.*\brel=)[^>]*)(?:[^>]*)>
/*
If you’re working with a batch of HTML code it can be gruesome to apply manual labor into repetitive tasks. Regular expressions are perfect for this occasion and they’ll save a whole lot of time.

This snippet can pull all anchor links from a block of HTML and append the rel=”nofollow” attribute to every element. The developer who wrote this code was kind enough to publish the raw expression plus a working example in PHP.
*/

// 29. Media Query Match

/@media([^{]+)\{([\s\S]+?})\s*}/g
/*
Break apart CSS media queries into their parameters and properties. This can help you analyze external CSS in a cleaner fashion with a more direct focus on how the code operates.
*/

// 30. Google Search Syntax

/([+-]?(?:'.+?'|".+?"|[^+\- ]{1}[^ ]*))/g
/*
You can build your own regex code for manipulating searchable text using Google’s trademark syntax. The plus sign (+) denotes additional keywords and the minus sign (-) denotes words that should be ignored and removed from results.

It’s a rather complicated snippet but used properly it can provide a base for building your own search algorithm.
*/
