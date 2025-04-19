let alphabet = ["hyakugaiatteitirinasi", "mizutoabura", "issekinityou", "hiniaburawososogu", "haruhaakebono", "huurinkazann", "sekaihamawaru", "supo-tunomitiwoiku", "nihonkai", "taiheiyou", "higasisinakai", "oho-tukukai", "indoyou", "sokutatuyuubinn", "nettosyoppinguwosuru", "sekainogijutunosinpohamemagurusii", "isogabamaware", "anpanman", "soukamosirenaine", "tumaranaimonodesuga", "anpanti", "jagutiwohineru", "komatteiruojiityanwotedasukesuru", "o-iotya"];
        let yomi = ["ひゃくがいあっていちりなし", "みずとあぶら", "いっせきにちょう", "ひにあぶらをそそぐ", "はるはあけぼの", "ふうりんかざん", "せかいはまわる", "すぽーつのみちをいく", "にほんかい", "たいへいよう", "ひがししなかい", "おほーつくかい", "いんどよう", "そくたつゆうびん", "ねっとしょっぴんぐをする", "せかいのぎじゅつのしんぽはめまぐるしい", "いそがばまわれ", "あんぱんまん", "そうかもしれないね", "あんぱんち", "じゃぐちをひねる", "こまっているおじいちゃんをてだすけする", "おーいおちゃ"];
        let hyouji = ["百害あって一利なし", "水と油", "一石二鳥", "火に油を注ぐ", "春はあけぼの", "風林火山", "世界は回る", "スポーツの道を行く", "日本海", "太平洋", "東シナ海", "オホーツク海", "インド洋", "速達郵便", "ネットショッピングをする", "世界の技術の進歩はめまぐるしい", "急がば回れ", "アンパンマン", "そうかもしれないね", "つまらないものですが", "アンパンチ", "蛇口をひねる", "困っているおじいちゃんを手助けする", "おーいお茶"];
        let n = [];
        let a = Math.floor(Math.random() * alphabet.length);
        let b = 0;
        let utumoji = alphabet[a][b];
        let aaa = utumoji;
        n[0] = document.querySelector("#screen");
        let body = document.querySelector("#body");
        let yomialpha = document.querySelector("#yomigana");
        let combos = document.querySelector("#combo");
        let imananmonme = 0;
        let imananmonmescreen = document.querySelector("#imananmonme");
        let goukeimojisuu = 0;
        let misstype = 0;
        let time = 0;
        let renzokucollect = 0;
        let maetokushu = "";
        let started = false;
        n[0].style.display = "block";
        yomialpha.style.display = "block";
        imananmonmescreen.style.display = "block";
        function removeChar(mojiretsu, iti){
            return mojiretsu.slice(0, iti) + mojiretsu.slice(iti + 1);
        }
        function shishagonyuu(kazu, kurai){
            let karinokazu = 10 ** kurai;
            return Math.round(kazu * karinokazu) / karinokazu;
        }
        body.addEventListener("keydown", function(e){
            if(e.code == "Space" && started == false){
                e.preventDefault();
                n[0].textContent = hyouji[a];
                utumoji = alphabet[a][b];
                aaa = utumoji;
                yomialpha.textContent = alphabet[a];
                started = true;
                const timer = setInterval(() => {
                    time++;
                }, 1000);
            } else{
                if(e.key == "y" && maetokushu == "chachucho"){
                        renzokucollect = 0;
                        goukeimojisuu++;
                        misstype++;
                        document.querySelector("#yomigana").style.color = "red";
                        combos.textContent = "";
                        setTimeout(() => {
                            document.querySelector("#yomigana").style.color = "black";
                        }, "250");
                } else if(e.key == aaa){
                    renzokucollect++;
                    goukeimojisuu++;
                    b++;
                    utumoji = alphabet[a][b];
                    aaa = utumoji;
                    yomialpha.textContent = removeChar(yomialpha.textContent, 0);
                    if(b == alphabet[a].length){
                        imananmonme++;
                        b = 0;
                        a = Math.floor(Math.random() * alphabet.length);
                        e.preventDefault();
                        n[0].textContent = hyouji[a];
                        utumoji = alphabet[a][b];
                        aaa = utumoji;
                        yomialpha.textContent = alphabet[a];
                        imananmonmescreen.textContent = imananmonme + "/20"
                        if(imananmonme > 20){
                            clearInterval(timer);
                            n[0].style.display = "none";
                            yomialpha.style.display = "none";
                            imananmonmescreen.style.display = "none";
                            n[0].textContent = "結果";
                            yomialpha.textContent = "タイプ速度:" + shishagonyuu((goukeimojisuu / time), 2) + "/s          ミスタイプ率:" + shishagonyuu((misstype / goukeimojisuu), 2) * 100 + "%";
                            n[0].style.display = "block";
                            yomialpha.style.display = "block";
                        }
                    }
                    if(renzokucollect % 50 == 0){
                        combos.textContent = renzokucollect + "combo!";
                    }
                } else{
                    if(alphabet[a][b - 1] == "s"){
                        if(aaa == "i"){
                            if(e.key == "h"){
                                renzokucollect++;
                                goukeimojisuu++;
                                aaa = utumoji;
                                maetokushu = "shi";
                            }
                        }
                        if(aaa == "y"){
                            if(e.key == "h"){
                                renzokucollect++;
                                goukeimojisuu++;
                                b++;
                                utumoji = alphabet[a][b];
                                aaa = utumoji;
                                yomialpha.textContent = removeChar(yomialpha.textContent, 0);
                                maetokushu = "shashusho";
                            }
                        }
                    } else{
                        if(alphabet[a][b - 1] == "t"){
                            if(aaa == "u"){
                                if(e.key == "s"){
                                    renzokucollect++;
                                    goukeimojisuu++;
                                    aaa = utumoji;
                                    yomialpha.textContent = "s" + yomialpha.textContent;
                                    maetokushu = "tsu";
                                }
                            }
                        }
                        if(aaa == "i"){
                            if(e.key == "h"){
                                renzokucollect++;
                                goukeimojisuu++;
                                aaa = utumoji;
                                maetokushu = "shi";
                            }
                        }
                        if(aaa == "j" && (alphabet[a][b + 1] == "a" || alphabet[a][b + 1] == "u" || alphabet[a][b + 1] == "e" || alphabet[a][b + 1] == "o")){
                            if(e.key == "z"){
                                renzokucollect++;
                                goukeimojisuu++;
                                utumoji = "y";
                                aaa = utumoji;
                                yomialpha.textContent = removeChar(yomialpha.textContent, 0);
                                yomialpha.textContent = "y" + yomialpha.textContent;
                                maetokushu = "zyazyuzyo";
                            } 
                        } else if(aaa == "j" && alphabet[a][b + 1] == "i"){
                            renzokucollect++;
                            goukeimojisuu++;
                            b++;
                            utumoji = alphabet[a][b];
                            aaa = utumoji;
                            yomialpha.textContent = removeChar(yomialpha.textContent, 0);
                        } else{
                            if(alphabet[a][b] == "t"){
                                if(e.key == "c"){
                                    if(alphabet[a][b + 1] == "y"){
                                        renzokucollect++;
                                        goukeimojisuu++;
                                        b++;
                                        utumoji = "h";
                                        aaa = utumoji;
                                        yomialpha.textContent = removeChar(yomialpha.textContent, 0);
                                        yomialpha.textContent = removeChar(yomialpha.textContent, 0);
                                        yomialpha.textContent = "h" + yomialpha.textContent;
                                        maetokushu = "chachucho";
                                    } else if(alphabet[a][b + 1] == "i"){
                                        renzokucollect++;
                                        goukeimojisuu++;
                                        utumoji = "h";
                                        aaa = utumoji;
                                        yomialpha.textContent = removeChar(yomialpha.textContent, 0);
                                        yomialpha.textContent = removeChar(yomialpha.textContent, 0);
                                        yomialpha.textContent = "hi" + yomialpha.textContent;
                                        maetokushu = "chi";
                                    }
                                }
                            } else if(aaa == "h" && alphabet[a][b + 1] == "u"){
                                if(e.key == "f"){
                                    renzokucollect++;
                                    goukeimojisuu++;
                                    b++;
                                    utumoji = alphabet[a][b];
                                    aaa = utumoji;
                                    yomialpha.textContent = removeChar(yomialpha.textContent, 0);
                                }
                            }else{
                                renzokucollect = 0;
                                goukeimojisuu++;
                                misstype++;
                                document.querySelector("#yomigana").style.color = "red";
                                combos.textContent = "";
                                setTimeout(() => {
                                    document.querySelector("#yomigana").style.color = "black";
                                }, "250");
                            }
                        }
                    }
                }
            }
            if(e.key == "i"){
                if(maetokushu == "shi"){
                    renzokucollect++;
                    goukeimojisuu++;
                    utumoji = alphabet[a][b];
                    aaa = utumoji;
                }
            }
            if(e.key == "u"){
                if(maetokushu == "tsu"){
                    renzokucollect++;
                    goukeimojisuu++;
                    utumoji = alphabet[a][b];
                    aaa = utumoji;
                }
            }
            if(e.key == "a" || e.key == "u" || e.key == "o"){
                if(maetokushu == "shashusho"){
                    renzokucollect++;
                    goukeimojisuu++;
                    utumoji = alphabet[a][b];
                    aaa = utumoji;
                }
            }
            if(e.key == "h"){
                if(maetokushu == "chachucho"){
                    renzokucollect++;
                    goukeimojisuu++;
                    utumoji = alphabet[a][b];
                    aaa = utumoji;
                    maetokushu = "chachuchofinal";
                } else if(maetokushu == "chi"){
                    renzokucollect++;
                    goukeimojisuu++;
                    utumoji = alphabet[a][b];
                    aaa = utumoji;
                    maetokushu = "chifinal";
                }
            }
            if(e.key == "a" || e.key == "u" || e.key == "o"){
                if(maetokushu == "chachuchofinal"){
                    renzokucollect++;
                    goukeimojisuu++;
                    utumoji = alphabet[a][b];
                    aaa = utumoji;
                    maetokushu = "";
                }
            }
            if(e.key == "i"){
                if(maetokushu == "chifinal"){
                    renzokucollect++;
                    goukeimojisuu++;
                    utumoji = alphabet[a][b];
                    aaa = utumoji;
                    maetokushu = "";
                }
            }
            if(e.key == "y"){
                if(maetokushu == "zyazyuzyo"){
                    renzokucollect++;
                    goukeimojisuu++;
                    utumoji = alphabet[a][b];
                    aaa = utumoji;
                    maetokushu = "zyazyuzyofinal";
                }
            }
            if(aaa == "a" || e.key == "u" || e.key == "o"){
                if(maetokushu == "zyazyuzyofinal"){
                    renzokucollect++;
                    goukeimojisuu++;
                    utumoji = alphabet[a][b];
                    aaa = utumoji;
                    maetokushu = "";
                }
            }
        });