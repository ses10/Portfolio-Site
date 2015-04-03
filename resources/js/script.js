/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * Adjust height of section div
 */
section = document.getElementsByTagName("section")[0];
mainContainer = document.getElementsByClassName("main-container")[0];
header = document.getElementsByTagName("header")[0];

sectionHeight = mainContainer.clientHeight - header.clientHeight;
section.style.height = sectionHeight.toString() + "px";

