JQuery Plugin personalize.js
============================

Mit diesem Plugin könnt Ihr eure Jobofferten personalisieren. Das Plugin besteht aus der Datei personalize.js sowie script.js, mit welcher das Plugin initialisiert wird. Zur Darstellung der einzelnen Jobofferten wird die Datei index.html sowie styles.css verwendet.

Wie Ihr das Plugin einsetzen könnt, möchte ich in den nachfolgenden Schritten erklären.
Zu allererst könnt Ihr euch die Screenshots ansehen und prüfen, ob das Plugin für euch in Frage kommt.

Für eine ordnungsgemäße Darstellung auf unterschiedlichen Geräten, habe ich ein responsives Design eingebunden.
Hierbei wurde der "Mobile First" Ansatz verwendet. Die Media-Queries haben eine min-with von 768px, 992px, 1200px.
Für eine Änderung passt Ihr einfach die Sassfiles _mobil.scss, _tablet.scss, _desktop.scss und _desktoplarge.scss euren
Wünschen an.

##Screenshots

####HTML-Seite mit den Jobofferten
![alt text](https://github.com/bmehler/personalize/raw/master/screenshots/screenshot1.jpg "Job offers")
####HTML-Seite mit personalisiertem Header
![alt text](https://github.com/bmehler/personalize/raw/master/screenshots/screenshot2.jpg "Job offers")

##Das Plugin einbinden

###index.html

Im head Bereich müsst ihr JQuery, das Plugin personalize.js sowie die script.js einbinden:
```HTML
<head>
   <meta charset="utf-8">
   <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700italic'>
   <link href='sassfiles/css/main.css' rel='stylesheet' type='text/css'>
   <script src="js/jquery-1.11.0.min.js"></script>
   <script src="js/personalize.js"></script>
   <script src="js/script.js"></script>
</head>
```
Eine Jobofferte bindet ihr über folgendes div ein.
```HTML
//Erste Offerte
<div class="offer">
    <h3>PHP-Entwickler</h3>
    <div class="extend">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi malesuada, ante at feugiat tincidunt, enim massa gravida metus, commodo lacinia massa diam vel eros. Proin eget urna. Nunc fringilla neque vitae odio. Vivamus vitae ligula.1</div>
</div>
//Zweite Offerte
<div class="offer">...</div>
```

Die einzelen Offerten werden dann nochmals umschlossen.
```HTML
<div class="offers">
<h1>Unsere Stellenagebote</h1>
    <div class="offer">...</div> 
</div>
```

###script.js

Die personalisierte Antwort, welche bei einem Click erscheint, fügt ihr gemäß eurer Offertenreihenfolge dem Array headers hinzu.
```Javascript
$( document ).ready(function() {
   $('h3').personalize({
      headers: ['In PHP fit? Wir freuen uns auf dich!', 'JQuery ist dir bekannt? Bitte bewirb dich!']
   });
});
```

Ich wünsche euch mit dem Plugin viel Spass!
