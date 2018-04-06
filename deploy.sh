#!/bin/bash
npm run build -- --base-href "https://ctoxy.github.io/KougniaMan/"
npm run deploy -- --repo=https://github.com/ctoxy/KougniaMan.git
