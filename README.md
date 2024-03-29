# Hangman_Game
### Dependencies
1. Flask
2. requests


Sub-dependencies mentioned in `requirement.txt`


### How to start :
First install virtual environment for python using the following command : 
```
pip install virtualenv
```
Create a virtual environment using : 
```
virtualenv venv
```
To start the environment :
```
source venv/bin/activate
```
After starting the venv
Install the dependencies using : 
```
pip install -r requirement.txt
```
To stop the venv :
```
deactivate
```
Now run the server using : 
```
python3 app.py
```

![](/ss/flask/hangman_flask_server.png)

### Screenshots
1. This is the home page :
   Click on the "start" button to start the game.

![](/ss/flask/hangman_home_page.png)


2. Guessing a letter that has multiple occurance in the word and guessing a correct letter : 

![](/ss/flask/hangman_guessing_similar_letters.png)

![](/ss/flask/hangman_guessing_correct.png)

3. Guessing a wrong letter :

![](/ss/flask/hangman_guessing_wrong.png)

4. Guessing previously guessed letters again(both correct and incorrect) : 

![](/ss/flask/hangman_guessing_already_guessed.png)

![](/ss/flask/hangman_guessing_correct_again.png)

![](/ss/flask/hangman_guessing_wrong_again.png)

5. Guessing multiple letters together or numeric characters : 

![](/ss/flask/hangman_not_single_letter.png)

![](/ss/flask/hangman_numeric.png)

6. Victory : 

![](/ss/flask/hangman_victory.png)

7. Loss : 

![](/ss/flask/hangman_loss.png)

#### The Terminal Version : 

```
python3 hangman_game.py
```

![](/ss/terminal/hangman_terminal_1.png)

![](/ss/terminal/hangman_terminal_2.png)

### NOTE : 
Hint option added later

1. Hint : 

![](/ss/flask/hangman_hint_1.png)

2. Few hints used : 

![](/ss/flask/hangman_hint_3.png)

3. All hints used : 

![](/ss/flask/hangman_hint_4.png)
