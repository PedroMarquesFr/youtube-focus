<p align="center">
<img src="src/styles/images/YTF-Long-logo.svg" align="center"/>
</p>

<h2 align="center">Welcome to Youtube Focus repository</h2>
<h4 align="center"> 
	🚧  In developement...  🚧
</h4>

## Project Description

<p >Study or do whatever you want on youtube without distractive recommendations 🚀</p>

<!--ts-->

- [About](#sobre)
- [Features](#tabela-de-conteudo)
- [Instalation](#instalacao)
- [How to use](#como-usar)
- [Tecnologies](#tecnologias)
<!--te-->

<h2 href="#sobre">About</h2>
<p>This project was inspired by a personal need. When i was in high school or university and had to study some content in video class youtube always recommended some unrelated videos which made it very difficult to concentrate. YT Focus removes the smart YouTube recommendation based on your tastes with anonymous queries. :D <p>

<h2 href="#tabela-de-conteudo">Features</h2>

- [x] Search
- [x] List Videos, paging
- [x] Recommendation component based on main video

<h2 href="#instalacao">Instalation</h2>

<!--ts-->

- After clone Run yarn on terminal to install dependencies
- Config Google API key
  - As google API is private and has limited Queries you will have use yours
  - [How to create youtube API Key](https://www.youtube.com/watch?v=3jZ5vnv-LZc)
  - With your API key go to src/services/`api_key_example.js` paste the key into the const API_KEY and rename the file to `api_key.js`
  - If your api key is correct and still having queries the project will run :D
<!--te-->

<h2 href="#como-usar">How to use</h2>
<p align="center">
    <img src="searchPage.png" align="center"/>
    <p>is just like Youtube but simpler</p>
    <img src="playerPage.png" align="center"/>
    <p>when clicking on a video you are going to be redirected to the player page<p>
</p>

<h2 href="#tecnologias">Tecnologies</h2>
<!--ts-->

- React
- Redux
- Styled Components
- Youtube DATA API v3

<!--te-->