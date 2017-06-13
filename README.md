<h1>Space Invader || Alien Invasion (however you like to call it)</h1>
https://soloshadow.github.io/Alien_Invasion/

<hr>

<h2>Game play </h2>
<p>Goal of the game is to shoot down as many aliens as possible.<br>
Move the ship with the left and right arrow key and press the spacebar to shoot at the aliens.
Whenever an alien is shot down, his friends will move faster so be carefull. When an entire fleet is shot down, a new faster fleet will appear.<br>
<strong> How many can you shoot down? </strong>

<hr>
<h1>Criteria for making this game</h1>

<h2>UML</h2>
<p>The uml is in the uml.png</p>
<br>
<h2>Encapsulation</h2>
<p>I have used encapsulation in almost all the classes to make some properties public or others private e.g in gameobject.ts most are public and in main.ts most are private<p>
<br>
<h2>Inheritance</h2>
<p>Player, stage, enemies, and bullets inherit from the gameobject</p>
<br>
<h2>Composition</h2>
<p>Player has bullets. And in the main.ts it has players, stages, fleets etc. </p>
<br>
<h2>Singleton</h2>
<p>The game uses a singleton in the main.ts file with the getInstance method</p>
<br>
<h2>Observer</h2>
<p>An observer is used in the enemies.ts and the subscriber is the fleets.ts. Each time an alien is removed from the fleet array, it wil send a notification to the enemies.ts to speed up the rest of the alien ships</p>
<br>
<h2>Strategy</h2>
<p>Strategy is in the action.ts where it controls how the player reacts to button presses</p>
<br>
<h2>Interface</h2>
<p>Observer and Subject are interfaces. The playerstates.ts is also an interface</p>
<br>
<h2>Static</h2>
<p>The util.ts class has a static collision detection method</p>
<br>
<h2>Abstract</h2>
<p>The gameobject.ts is an abstract class</p>
<br>
<h2>Namespaces</h2>
<p>The action.ts is a namespace class</p>
<br>
<h2>Polymorphism</h2>
</p>Player, bullets and stages are children classes from gameobject.ts</p>
<br>
<h2>Enumerations</h2>
<p>The keys.ts is an example of enumeration where I put the keybindings</p>
<br>
<h2>Game Loop</h2>
<p>In the main.ts is the game loop</p>
<br>
<h2>Library</h2>
<p>Used the greensock library for the start and end screen</p>
<hr>
<br>
