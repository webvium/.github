#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "versions:",
        choices: [
            {
                name: `v2.8 (stable latest)`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v2.8.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v2.8 (dev latest)`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/dev/Webvium-dev.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v2.7`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v2.7.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v2.6`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v2.6.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v2.5`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v2.5.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v2.4`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v2.4.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v2.3`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v2.3.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v2.2`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v2.2.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v2.1`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v2.1.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v2.0`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v2.0.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v1.9`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v1.9.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v1.8`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v1.8.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v1.7`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v1.7.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v1.6`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v1.6.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v1.5`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v1.5.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v1.4`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v1.4.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v1.3`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v1.3.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v1.2`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v1.2.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v1.1`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v1.1.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v1.0`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20v1.0.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: "\n {exit} \n",
                value: () => {
                    console.log("Thank you for checking our app.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.blue("             Webvium"),
    handle: chalk.white("@mrepol742"),
    tag: `${chalk.white("Lightweight, Fast, Material and \nFull-Featured Android Web Browser.")}`,
    url: `${chalk.grey("https://webvium.github.io")}`,
    end: `               ---`
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.tag}`,
        `${data.url}`,
        ``,
        `${data.end}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

console.log(me);

prompt(questions).then(answer => answer.action());