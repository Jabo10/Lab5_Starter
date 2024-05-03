# Lab 5 - Starter
Jeremy Abondano
https://jabo10.github.io/Lab5_Starter/expose.html
https://jabo10.github.io/Lab5_Starter/explore.html
1. I think because one of the cons mentioned for the unit testing was based using multiple components it would not be good to unit test the message feature "Cannot test how these individual components interact with each other on an application/feature level." The multiple components would probably be the interface from the user and how it interacts with the network as well as storing these messages using a database. So other forms of testing would have to be used. 
2. I think that it would be good to use unit testing to test the max message length because it is debugging on a small scale, essentially it can be isolated.All you would have to do is check if the message itself can go past the set limit and with a unit test this can be simulated easily in order to verify. Just pass in a string of length 81 and see if it is accepted. 
