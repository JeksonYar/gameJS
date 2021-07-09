let corretAnswer = 0;//верные ответы
let incorretAnswer = 0;//не верные ответы


function random() {//выбираем случайное слово/цвет
    this.namescolors = Array('red', 'green', 'blue', 'black');
    this.choice = namescolors[Math.floor(Math.random() * namescolors.length)];

    return this.choice;
}


class game {
    
    static clickyes = function () {//нажатие на кнопку yes
        let word1 = document.getElementById('word1');//задаем новую пару слов
        let word2 = document.getElementById('word2');
        let val = word1.textContent;
        let col = word2.style.color;
        if (val == col) {//проверка на правильность ответа
            corretAnswer++;
        }
        else {
            incorretAnswer++;
        }
        word2.innerHTML = random();//обновляем слова
        word1.innerHTML = random();
        word1.style.color = random();
        word2.style.color = random();
    }

    static clickno = function () {//нажатие на кнопку no
        let word1 = document.getElementById('word1');//задаем новую пару слов
        let word2 = document.getElementById('word2');
        let val = word1.textContent;
        let col = word2.style.color;
        if (val == col) {//проверка на правильность ответа
            incorretAnswer++;
        }
        else {
            corretAnswer++;
        }
        word2.innerHTML = random();//обновляем 2ое слово
        word1.innerHTML = random();//обновляем 1ое слово
        word1.style.color = random();//обновляем цвет 1гослова
        word2.style.color = random();//обновляем цвет 2го слова
    }
}


class timer {
    static clock = function () {//задаем таймер
        corretAnswer = 0; //обнуление ответов
        incorretAnswer = 0;
        let word1 = document.getElementById('word1');//задаем первую пару слов
        let word2 = document.getElementById('word2');
        word2.innerHTML = random();
        word1.innerHTML = random();
        word1.style.color = random();
        word2.style.color = random();
        let time = 5; //время таймера
        let count = setInterval(timer, 1000);
        function timer() {
            time = time - 1;
            if (time == -1) {
                clearInterval(count);
                document.getElementById("corretAnswer").innerHTML = "верных ответов: " + corretAnswer ;//по завершению выводим кол-во верных ответов
                document.getElementById("incorretAnswer").innerHTML = "не верных ответов: " + incorretAnswer;//по завершению выводим кол-во не верных ответов
                return;
            }
            let sec = time % 60;
            document.getElementById("corretAnswer").innerHTML = sec;
            document.getElementById("incorretAnswer").innerHTML = "";

        }
    }
}
