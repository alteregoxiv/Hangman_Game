import requests
import json
import time

httpresponse = requests.get("https://random-word-api.herokuapp.com/word?number=1")
textdata = httpresponse.text
jsondata = json.loads(textdata)

mdata = jsondata[0]
ndata = [i for i in mdata]
l = len(mdata)
s = ["_" for i in range(l)]
already_guessed = []

life = 5
while life>0:
    if ("").join(s)==mdata:
        time.sleep(1.5)
        print("---------------------------------")
        print("Yay! You Won")
        print("The Word was : " + mdata)
        print("---------------------------------")
        break
    
    print()
    print("[" + (" ").join(s) + "]")
    print("Enter your letter : " , end = "")
    q = input()
    print()
    time.sleep(1.5)

    while len(q)>1 or q.isnumeric():
        print("Please enter one letter : " , end = "")
        q = input()
        print()
        time.sleep(1.5)

    if q in ndata:
        already_guessed += [q]
        count = mdata.count(q)
        for i in range(count):
            w = ndata.index(q)
            ndata[w] = 0
            s[w] = q
    else:
        if q in already_guessed:
            print("You've already guessed " + q)
            continue
        print()
        already_guessed += [q]
        life -= 1
        if life!=0:
            print("Wrong choice!")
            print("LIFE LEFT : " + str(life))
            print("Please try again")
        else:
            print("LIFE LEFT : " + str(0))

else:
    print("---------------------------------")
    print("Better Luck Next Time!")
    print("The Word was : " + mdata)
    print("---------------------------------")
