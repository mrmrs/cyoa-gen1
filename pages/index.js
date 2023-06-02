import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Head from 'next/head'
import Image from 'next/image'
import randomColor from 'random-hex-color'
import chroma from 'chroma-js'
import {sample} from 'lodash'
import PoissonDiskSampling from 'poisson-disk-sampling'
import { randomInt } from '../lib/random'
import LineGridVertical from '../components/line-grid-vertical'
import LineGridHorizontal from '../components/line-grid-horizontal'
import ShapeGrid from '../components/shape-grid'
import RectGrid from '../components/rect-grid'
import EquilateralTriangle from '../components/equilateral-triangle'
import Circles from '../components/circles'
import PolarGraph from '../components/polar-graph'

const curated = [
  [
  "#f5f5f5", "#a9b399", "#616b6d", "#181010", 
  "#80bedb", "#8d022e", "#e71861", "#ffa995", 
  "#c6924f", "#885818", "#dc6f0f", "#f6d714",
  "#0bdb52", "#138e7d", "#2b4555", "#7161de"
  ],
['#1a1c2c', '#5d275d', '#b13e53', '#ef7d57', '#ffcd75', '#a7f070', '#38b764', '#257179', '#29366f', '#3b5dc9', '#41a6f6', '#73eff7', '#f4f4f4', '#94b0c2', '#566c86', '#333c57',],
['#000000', '#1D2B53', '#7E2553', '#008751', '#AB5236', '#5F574F', '#C2C3C7', '#FFF1E8', '#FF004D', '#FFA300', '#FFEC27', '#00E436', '#29ADFF', '#83769C', '#FF77A8', '#FFCCAA',],
['#8c8fae', '#584563', '#3e2137', '#9a6348', '#d79b7d', '#f5edba', '#c0c741', '#647d34', '#e4943a', '#9d303b', '#d26471', '#70377f', '#7ec4c1', '#34859d', '#17434b', '#1f0e1c',],
['#213b25', '#3a604a', '#4f7754', '#a19f7c', '#77744f', '#775c4f', '#603b3a', '#3b2137', '#170e19', '#2f213b', '#433a60', '#4f5277', '#65738c', '#7c94a1', '#a0b9ba', '#c0d1cc',],
['#ffffff', '#6df7c1', '#11adc1', '#606c81', '#393457', '#1e8875', '#5bb361', '#a1e55a', '#f7e476', '#f99252', '#cb4d68', '#6a3771', '#c92464', '#f48cb6', '#f7b69e', '#9b9c82',],
['#e4a672', '#b86f50', '#743f39', '#3f2832', '#9e2835', '#e53b44', '#fb922b', '#ffe762', '#63c64d', '#327345', '#193d3f', '#4f6781', '#afbfd2', '#ffffff', '#2ce8f4', '#0484d1',],
['#d1b187', '#c77b58', '#ae5d40', '#79444a', '#4b3d44', '#ba9158', '#927441', '#4d4539', '#77743b', '#b3a555', '#d2c9a5', '#8caba1', '#4b726e', '#574852', '#847875', '#ab9b8e',],
['#16171a', '#7f0622', '#d62411', '#ff8426', '#ffd100', '#fafdff', '#ff80a4', '#ff2674', '#94216a', '#430067', '#234975', '#68aed4', '#bfff3c', '#10d275', '#007899', '#002859',],
['#000000', '#626262', '#898989', '#adadad', '#ffffff', '#9f4e44', '#cb7e75', '#6d5412', '#a1683c', '#c9d487', '#9ae29b', '#5cab5e', '#6abfc6', '#887ecb', '#50459b', '#a057a3',],
['#140c1c', '#442434', '#30346d', '#4e4a4e', '#854c30', '#346524', '#d04648', '#757161', '#597dce', '#d27d2c', '#8595a1', '#6daa2c', '#d2aa99', '#6dc2ca', '#dad45e', '#deeed6',],
['#28282e', '#6c5671', '#d9c8bf', '#f98284', '#b0a9e4', '#accce4', '#b3e3da', '#feaae4', '#87a889', '#b0eb93', '#e9f59d', '#ffe6c6', '#dea38b', '#ffc384', '#fff7a0', '#fff7e4',],
['#000000', '#7e7e7e', '#bebebe', '#ffffff', '#7e0000', '#fe0000', '#047e00', '#06ff04', '#7e7e00', '#ffff04', '#00007e', '#0000ff', '#7e007e', '#fe00ff', '#047e7e', '#06ffff',],
['#699fad', '#3a708e', '#2b454f', '#111215', '#151d1a', '#1d3230', '#314e3f', '#4f5d42', '#9a9f87', '#ede6cb', '#f5d893', '#e8b26f', '#b6834c', '#704d2b', '#40231e', '#151015',],
['#000000', '#555555', '#aaaaaa', '#ffffff', '#0000aa', '#5555ff', '#00aa00', '#55ff55', '#00aaaa', '#55ffff', '#aa0000', '#ff5555', '#aa00aa', '#ff55ff', '#aa5500', '#ffff55',],
['#222533', '#6275ba', '#a3c0e6', '#fafffc', '#ffab7b', '#ff6c7a', '#dc435b', '#3f48c2', '#448de7', '#2bdb72', '#a7f547', '#ffeb33', '#f58931', '#db4b3d', '#a63d57', '#36354d',],
['#0d080d', '#4f2b24', '#825b31', '#c59154', '#f0bd77', '#fbdf9b', '#fff9e4', '#bebbb2', '#7bb24e', '#74adbb', '#4180a0', '#32535f', '#2a2349', '#7d3840', '#c16c5b', '#e89973',],
['#ddcf99', '#cca87b', '#b97a60', '#9c524e', '#774251', '#4b3d44', '#4e5463', '#5b7d73', '#8e9f7d', '#645355', '#8c7c79', '#a99c8d', '#7d7b62', '#aaa25d', '#846d59', '#a88a5e',],
['#FFFFFF', '#E4E4E4', '#888888', '#222222', '#FFA7D1', '#E50000', '#E59500', '#A06A42', '#E5D900', '#94E044', '#02BE01', '#00D3DD', '#0083C7', '#0000EA', '#CF6EE4', '#820080',],
['#313432', '#323e42', '#454b4b', '#3a5f3b', '#7c4545', '#675239', '#625055', '#516b43', '#796c64', '#718245', '#9e805c', '#998579', '#ac9086', '#a6a296', '#b4ab8f', '#bcb7a5',],
['#202020', '#2d211e', '#452923', '#6d3d29', '#b16b4a', '#e89f6e', '#e8be82', '#5d7557', '#8e9257', '#707b88', '#8aa7ac', '#e55d4d', '#f1866c', '#d26730', '#de9a28', '#e8d8a5',],
['#000000', '#001418', '#002024', '#002c38', '#143444', '#443444', '#583c48', '#6c4c44', '#806058', '#6c706c', '#888078', '#a49484', '#c4ac9c', '#d8b0a8', '#ecd4d0', '#fcfcfc',],
['#00033c', '#005260', '#009d4a', '#0aff52', '#003884', '#008ac5', '#00f7ff', '#ff5cff', '#ac29ce', '#600088', '#b10585', '#ff004e', '#2a2e79', '#4e6ea8', '#add4fa', '#ffffff',],
['#ffffff', '#ffd19d', '#aeb5bd', '#4d80c9', '#e93841', '#100820', '#511e43', '#054494', '#f1892d', '#823e2c', '#ffa9a9', '#5ae150', '#ffe947', '#7d3ebf', '#eb6c82', '#1e8a4c',],
['#000000', '#4a4a4a', '#7b7b7b', '#b2b2b2', '#ffffff', '#813338', '#c46c71', '#553800', '#8e5029', '#edf171', '#a9ff9f', '#56ac4d', '#75cec8', '#706deb', '#2e2c9b', '#8e3c97',],
['#320011', '#5f3a60', '#876672', '#b7a39d', '#ece8c2', '#6db7c3', '#5e80b2', '#627057', '#8da24e', '#d2cb3e', '#f7d554', '#e8bf92', '#e78c5b', '#c66f5e', '#c33846', '#933942',],
['#000000', '#191028', '#46af45', '#a1d685', '#453e78', '#7664fe', '#833129', '#9ec2e8', '#dc534b', '#e18d79', '#d6b97b', '#e9d8a1', '#216c4b', '#d365c8', '#afaab9', '#f5f4eb',],
['#352b40', '#653d48', '#933f45', '#b25e46', '#cc925e', '#dacb80', '#f0e9c9', '#76c379', '#508d76', '#535c89', '#7b99c8', '#99d4e6', '#be7979', '#d8b1a1', '#7d6e6e', '#c2b5a9',],
['#430067', '#94216a', '#ff004d', '#ff8426', '#ffdd34', '#50e112', '#3fa66f', '#365987', '#000000', '#0033ff', '#29adff', '#00ffcc', '#fff1e8', '#c2c3c7', '#ab5236', '#5f574f',],
['#000000', '#1b1e29', '#362747', '#443f41', '#52524c', '#64647c', '#736150', '#77785b', '#9ea4a7', '#cbe8f7', '#e08b79', '#a2324e', '#003308', '#084a3c', '#546a00', '#516cbf',],
['#2d1b2e', '#218a91', '#3cc2fa', '#9af6fd', '#4a247c', '#574b67', '#937ac5', '#8ae25d', '#8e2b45', '#f04156', '#f272ce', '#d3c0a8', '#c5754a', '#f2a759', '#f7db53', '#f9f4ea',],
['#64c224', '#0fa10d', '#097938', '#0b6457', '#0a5058', '#0a4158', '#0a2e58', '#091837', '#281961', '#552067', '#702763', '#863453', '#a14b4b', '#b67a5b', '#c8a26e', '#e1d483',],
['#000000', '#181818', '#282828', '#383838', '#474747', '#565656', '#646464', '#717171', '#7e7e7e', '#8c8c8c', '#9b9b9b', '#ababab', '#bdbdbd', '#d1d1d1', '#e7e7e7', '#ffffff',],
['#212b5e', '#636fb2', '#adc4ff', '#ffffff', '#ffccd7', '#ff7fbd', '#872450', '#e52d40', '#ef604a', '#ffd877', '#00cc8b', '#005a75', '#513ae8', '#19baff', '#7731a5', '#b97cff',],
['#fdffff', '#ff8686', '#fb4771', '#ce186a', '#8f0b5f', '#53034b', '#ad6dea', '#9fb9ff', '#567feb', '#0a547b', '#278c7f', '#0ce7a7', '#acfcad', '#ffec6d', '#ffa763', '#ff4040',],
['#070708', '#332222', '#774433', '#cc8855', '#993311', '#dd7711', '#ffdd55', '#ffff33', '#55aa44', '#115522', '#44eebb', '#3388dd', '#5544aa', '#555577', '#aabbbb', '#ffffff',],
['#fefed7', '#dbbc96', '#ddac46', '#c25940', '#683d64', '#9c6659', '#88434f', '#4d2831', '#a9aba3', '#666869', '#51b1ca', '#1773b8', '#639f5b', '#376e49', '#323441', '#161323',],
['#8e6d34', '#513a18', '#332710', '#14130c', '#461820', '#a63c1e', '#d37b1e', '#e7bc4f', '#eeeefa', '#d9d55b', '#757320', '#14210f', '#040405', '#1c1b2f', '#435063', '#60a18f',],
['#cbd1be', '#8f9389', '#52534c', '#26201d', '#e0a46e', '#91a47a', '#5d7643', '#4d533a', '#a93130', '#7a1338', '#834664', '#917692', '#160712', '#593084', '#3870be', '#579fb4',],
['#7acccc', '#627db3', '#554080', '#592858', '#804055', '#b37d62', '#ccc97a', '#70b362', '#40806a', '#274457', '#cccccc', '#999491', '#665c5f', '#332b33', '#804e46', '#4d2a2a',],
['#64988e', '#3d7085', '#0f2c2e', '#345644', '#6b7f5c', '#b0b17c', '#e1c584', '#c89660', '#ad5f52', '#913636', '#692f11', '#89542f', '#796e63', '#a17d5e', '#b4a18f', '#ecddba',],
['#1d2531', '#a5e5c5', '#f0fafd', '#52a593', '#2b6267', '#1e303a', '#3b4251', '#527b92', '#7dc1c1', '#c7fff3', '#b8cbd8', '#7e8da1', '#8fa990', '#e5debb', '#cea061', '#854731',],
['#613832', '#8b5851', '#bf8f75', '#ffdeb2', '#ffa5a5', '#ff8db5', '#b87ca4', '#856082', '#5a4a60', '#73628b', '#887fce', '#8cc1d4', '#8bf0c4', '#78bab4', '#527378', '#2f4447',],
['#0f151b', '#292732', '#535867', '#95928f', '#f1f1ea', '#c58d65', '#8d5242', '#513d3d', '#ecd56d', '#ea7730', '#cd3d3d', '#7c3f8c', '#304271', '#0083c8', '#47a44d', '#1f6143',],
['#000000', '#ffffff', '#a8734a', '#e9b287', '#772d26', '#b66862', '#85d4dc', '#c5ffff', '#a85fb4', '#e99df5', '#559e4a', '#92df87', '#42348b', '#7e70ca', '#bdcc71', '#ffffb0',],
['#000000', '#2b2232', '#473759', '#98879f', '#232433', '#5f6f87', '#829eb3', '#93abc2', '#1a2120', '#424849', '#5e7173', '#c3b3c8', '#866273', '#a2878a', '#b09ea0', '#daced3',],
['#53437f', '#a89fcc', '#ffffff', '#ffd9e8', '#ff9bb6', '#9968e2', '#be9bff', '#7fceff', '#6d81ff', '#2c6f99', '#00bcaa', '#c48f9e', '#8e586f', '#ff5470', '#ff9b71', '#ffd9ae',],
['#e1d8cb', '#c3b197', '#a68a64', '#614f38', '#362c20', '#82998f', '#525e5a', '#3a4040', '#222326', '#0a0d0a', '#20331f', '#495840', '#888f72', '#c7c7a5', '#de8d7d', '#833121',],
['#050403', '#221f31', '#543516', '#9b6e2d', '#e1b047', '#f5ee9b', '#fefefe', '#8be1e0', '#7cc264', '#678fcb', '#316f23', '#404a68', '#a14d3f', '#a568d4', '#9a93b7', '#ea9182',],
['#fff9b3', '#b9c5cc', '#4774b3', '#144b66', '#8fb347', '#2e994e', '#f29066', '#e65050', '#707d7c', '#293c40', '#170b1a', '#0a010d', '#570932', '#871e2e', '#ffbf40', '#cc1424',],
['#f3f3f3', '#f9c2a4', '#b8700e', '#5e0d24', '#a29eb4', '#c259df', '#8f27b8', '#c1002b', '#6c606f', '#0047ed', '#00a8f3', '#ddb411', '#004952', '#07865c', '#00c37d', '#051c25',],
['#f2d3ac', '#e7a76c', '#c28462', '#905b54', '#513a3d', '#7a6977', '#878c87', '#b5c69a', '#272223', '#606b31', '#b19e3f', '#f8c65c', '#d58b39', '#996336', '#6a422c', '#b55b39',],
['#99d4aa', '#498e86', '#324859', '#437a4d', '#7dbe58', '#eadb77', '#dc8254', '#c13d37', '#61363d', '#b06163', '#e6af89', '#fff9e5', '#c1a68c', '#8b6962', '#0d0b0d', '#9d5745',],
['#ffffff', '#ffff00', '#ff6500', '#dc0000', '#ff0097', '#360097', '#0000ca', '#0097ff', '#00a800', '#006500', '#653600', '#976536', '#b9b9b9', '#868686', '#454545', '#000000',],
['#9dc1c0', '#525b80', '#312139', '#120e1f', '#284646', '#62ab46', '#95533d', '#6a2435', '#654147', '#fff169', '#d7793f', '#ab3229', '#9e8f84', '#ffface', '#e0b56d', '#f68b69',],
['#f1e2be', '#e6d1a1', '#f0d696', '#caac77', '#a58a62', '#886243', '#c0977a', '#944431', '#d2bc76', '#ad9d62', '#887c56', '#594a45', '#a9a994', '#87867a', '#445162', '#000000',],
['#ec6f1c', '#b4522e', '#7a3030', '#f6ae3c', '#fbdb7a', '#eafba3', '#e3f6d5', '#9ce77f', '#49d866', '#408761', '#2d4647', '#345452', '#3a878b', '#3da4db', '#95c5f2', '#cacff9',],
['#fafafa', '#d4d4d4', '#9d9d9d', '#4b4b4b', '#f9d381', '#eaaf4d', '#f9938a', '#e75952', '#9ad1f9', '#58aeee', '#8deda7', '#44c55b', '#c3a7e1', '#9569c8', '#bab5aa', '#948e82',],
['#2e3440', '#3b4252', '#434c5e', '#4c566a', '#d8dee9', '#e5e9f0', '#eceff4', '#8fbcbb', '#88c0d0', '#81a1c1', '#5e81ac', '#bf616a', '#d08770', '#ebcb8b', '#a3be8c', '#b48ead',],
['#f9fff2', '#f5d678', '#6be0bf', '#bab197', '#96d45b', '#f56c77', '#e0864a', '#59909e', '#579460', '#9e4891', '#6e6660', '#505273', '#ab3737', '#693c36', '#3a363d', '#202026',],
['#252945', '#515369', '#848fa1', '#d9d9cc', '#a13567', '#e06767', '#7d309c', '#bd46b7', '#4e4cc7', '#5d74cf', '#7994d4', '#79bee0', '#63b04f', '#a7d950', '#d4996a', '#d9cf91',],
['#000000', '#493c2b', '#be2633', '#e06f8b', '#9d9d9d', '#a46422', '#eb8931', '#f7e26b', '#ffffff', '#1b2632', '#2f484e', '#44891a', '#a3ce27', '#005784', '#31a2f2', '#b2dcef',],
['#160d13', '#31293e', '#4d6660', '#95b666', '#ef9e4e', '#ad4030', '#56212a', '#904b41', '#a69998', '#5f575e', '#8eb89e', '#f6f2c3', '#e79b7c', '#9b4c63', '#432142', '#d1935f',],
['#ff9072', '#ffc567', '#fce39a', '#f7f7c7', '#afe48d', '#61d868', '#29ab7d', '#2b75b7', '#00408f', '#092867', '#110f3e', '#371a77', '#6f2a8f', '#ab2aa3', '#d64d9a', '#ff718c',],
['#000000', '#232323', '#602217', '#3a3f3f', '#815938', '#626439', '#686f6f', '#497aa7', '#cd6627', '#879b42', '#af9156', '#5ea2b0', '#9fa089', '#a4bec1', '#dbce2d', '#ffffff',],
['#65471e', '#b57075', '#dcab80', '#f8d8ab', '#b8aaaa', '#fff5f5', '#fca5c2', '#ec4646', '#ffa322', '#f9fa93', '#7bc188', '#8ed3f8', '#5989a3', '#d793fa', '#74518e', '#1d173c',],
['#1d1819', '#482632', '#273635', '#4d3d2f', '#933633', '#316436', '#825c3a', '#b95358', '#c77331', '#617a6f', '#7fa533', '#ca9864', '#afaa94', '#7dcfa8', '#e7dc58', '#f7f6db',],
['#000000', '#262144', '#355278', '#60748a', '#898989', '#5aa8b2', '#91d9f3', '#ffffff', '#f4cd72', '#bfb588', '#c58843', '#9e5b47', '#5f4351', '#dc392d', '#6ea92c', '#1651dd',],
['#4d004c', '#8f0076', '#c70083', '#f50078', '#ff4764', '#ff9393', '#ffd5cc', '#fff3f0', '#000221', '#000769', '#00228f', '#0050c7', '#008bf5', '#00bbff', '#47edff', '#93fff8',],
['#0c0b0f', '#af3f52', '#5f3959', '#2e2937', '#905c9a', '#d78d42', '#93593b', '#8d92ac', '#d47fb0', '#dddd50', '#75b546', '#4a6db2', '#f3cb94', '#eff0e9', '#a7d6da', '#56a1c8',],
['#000000', '#68605c', '#b0b0b8', '#fcfcfc', '#1c38ac', '#7070fc', '#a82814', '#fc4848', '#208800', '#70f828', '#b82cd0', '#fc74ec', '#ac581c', '#f8a850', '#3cd4e4', '#f8ec20',],
['#2e1b37', '#4e53a2', '#7394ba', '#e6e1cc', '#28524e', '#3a7e4c', '#7da446', '#edd15a', '#4b1d45', '#8c315d', '#cf4f4f', '#f6788d', '#6a5154', '#a45a41', '#d87e46', '#b49a8d',],
['#fffdda', '#f1d29e', '#b58c6e', '#6b4a41', '#3b2422', '#665953', '#a39d77', '#ebdc6c', '#d9903d', '#a7512d', '#6b2727', '#3b1b23', '#170f0d', '#1e2f27', '#51634d', '#9dba6c',],
['#0a080d', '#697594', '#dfe9f5', '#f7aaa8', '#d4689a', '#782c96', '#e83562', '#f2825c', '#ffc76e', '#88c44d', '#3f9e59', '#373461', '#4854a8', '#7199d9', '#9e5252', '#4d2536',],
['#000000', '#90B0B0', '#FFFFFF', '#800018', '#FF0000', '#A05000', '#FF8000', '#FFC080', '#FFFF00', '#20AC00', '#40FF00', '#003070', '#3070B0', '#00D0FF', '#A000E0', '#FF60FF',],
['#000000', '#3c351f', '#313390', '#1559db', '#a73211', '#d85525', '#a15589', '#cd7a50', '#629a31', '#9cd33c', '#28a4cb', '#65dcd6', '#e8bc50', '#f1e782', '#bfbfbd', '#f2f1ed',],
['#ffffff', '#75ceea', '#317ad7', '#283785', '#1a1b35', '#2e354e', '#4f6678', '#a4bcc2', '#ecf860', '#94d446', '#3b7850', '#20322e', '#512031', '#a43e4b', '#dc7d5e', '#f0cc90',],
['#0b0d0a', '#383730', '#665f57', '#82857b', '#b1b8a9', '#dee6b8', '#95bdb2', '#5a7b85', '#273245', '#477a5a', '#81ba78', '#d4ea92', '#b59766', '#8f5450', '#66403c', '#40292f',],
['#95cecd', '#4c898b', '#0e3e5b', '#15894c', '#95ce56', '#eeee77', '#f7a046', '#d64b33', '#5a340e', '#b05670', '#ffad93', '#ffffff', '#acaaac', '#626562', '#000000', '#ad601a',],
['#0b0b0b', '#566262', '#8d8d85', '#a7b5ba', '#f0e9cf', '#d39f80', '#b0703e', '#5a4142', '#d1d15b', '#a7d254', '#58a23c', '#7ac2e0', '#786aff', '#3e489d', '#8363ad', '#c14867',],
['#100a0a', '#333025', '#585e53', '#a5a589', '#eae5d1', '#dec666', '#97ab50', '#516b38', '#25150f', '#522732', '#9c323c', '#c4663d', '#e48d80', '#6392af', '#2c3c6a', '#2c1d34',],
['#8c1e2c', '#dc443c', '#ff8c66', '#c75b38', '#d66f24', '#e4ba32', '#21913b', '#83b535', '#ebd5bd', '#66c3d9', '#387cee', '#3539a2', '#998da2', '#594e6f', '#2b1a4b', '#08050e',],
['#120919', '#1b1f4b', '#592942', '#106836', '#854a2f', '#4d4b44', '#a4b2bf', '#deeed6', '#d04648', '#ed8f3b', '#ebd951', '#61ad36', '#5190c8', '#776e87', '#e384a2', '#e5bba7',],
['#c686ca', '#7853a7', '#3c3e66', '#5d91d8', '#9dddf0', '#eff5f5', '#a3b0bb', '#676b8b', '#23232e', '#4d3347', '#8e516a', '#ce6374', '#f4ae70', '#f1de82', '#6fc453', '#3d8367',],
['#902068', '#f81868', '#ffa880', '#ff7000', '#a80010', '#ffa800', '#ffffa8', '#a8e038', '#5800a8', '#6828ff', '#ffffff', '#e0d0ff', '#a070c8', '#683090', '#481868', '#000000',],
['#0f0f1e', '#fff8bc', '#0c2133', '#48586d', '#79a0b0', '#b0ce9d', '#657f49', '#3f4536', '#b99d6a', '#ffdd91', '#dd945b', '#9a5142', '#644b48', '#333033', '#767088', '#c5a3b3',],
['#000000', '#5e606e', '#2234d1', '#4c81fb', '#0c7e45', '#6cd947', '#44aacc', '#7be2f9', '#8a3622', '#eb8a60', '#5c2e78', '#e23d69', '#aa5c3d', '#ffd93f', '#b5b5b5', '#ffffff',],
['#000000', '#1b3e3c', '#3e5b51', '#6e7e55', '#a9a96b', '#ffe1cb', '#ffc190', '#ffb54a', '#ff8837', '#ff5d00', '#ba4509', '#902200', '#4e0d00', '#dd2200', '#ff4e1d', '#ffffff',],
['#f6f6bf', '#e6d1d1', '#868691', '#794765', '#f5e17a', '#edc38d', '#cc8d86', '#ca657e', '#39d4b9', '#8dbcd2', '#8184ab', '#686086', '#9dc085', '#7ea788', '#567864', '#051625',],
['#f9f8dd', '#d2e291', '#a8d455', '#9cab6c', '#5c8d58', '#3b473c', '#8b8893', '#54555c', '#e0bf7a', '#ba9572', '#876661', '#272120', '#b7c4d0', '#8daad6', '#9197b6', '#6b72d4',],
['#160b27', '#3e4768', '#8e98b9', '#dee6fe', '#f3c41c', '#f98617', '#d42c4f', '#5f0267', '#4a10e8', '#2197f0', '#52daf7', '#bb4d11', '#ed7fb8', '#30fca6', '#17ba7d', '#056244',],
['#242e36', '#455951', '#798766', '#b7bca2', '#d6d6d6', '#f4f0ea', '#6988a1', '#a1b0be', '#595b7c', '#95819d', '#c9a5a9', '#f4dec2', '#704f4f', '#b7635b', '#e39669', '#ebc790',],
['#140c00', '#690804', '#de2c2c', '#fa5555', '#382400', '#a1858d', '#d0b2ba', '#facaca', '#002000', '#405544', '#617561', '#99b295', '#0c3044', '#556d89', '#7595b6', '#deeeff',],
['#cdbeac', '#7b7d6a', '#4e554e', '#352f28', '#4a484a', '#3c3b4a', '#343234', '#2a252a', '#c5a46b', '#9f673e', '#7a5c54', '#60484d', '#ee999c', '#8b484a', '#613234', '#080400',],
['#2b0a03', '#692731', '#83403a', '#ab613b', '#b57735', '#bf914f', '#c1b367', '#5cbb72', '#49af75', '#5d9984', '#5d7c8f', '#63364e', '#63416b', '#6a5489', '#6569a0', '#627bb4',],
['#e7ebf8', '#adb1e0', '#b06bb5', '#6d2ea4', '#aae474', '#14ada0', '#597acd', '#7dc9de', '#fff7a7', '#ffbe6c', '#ff6773', '#bb027a', '#f8c8af', '#a17374', '#2e5b86', '#0c2a47',],
['#000000', '#291a13', '#724c30', '#b68c56', '#fff0a0', '#463007', '#755a0b', '#ab811d', '#5e260e', '#a1430f', '#ff8b18', '#f6bf3a', '#552012', '#9a361e', '#eb5731', '#ee9852',],
['#1b0f28', '#4c6684', '#83bfca', '#f4f9e6', '#233e38', '#357b45', '#8ab954', '#f2e05a', '#312039', '#6e2745', '#c6434e', '#e7937e', '#544242', '#9e523b', '#e98549', '#8d8878',],
['#2d1a15', '#6b2511', '#b61d1d', '#ce421a', '#e56520', '#e77e1b', '#f7a31b', '#ffbb18', '#d9cdbd', '#f6f0e9', '#e5d1a3', '#e5c57b', '#e1b36a', '#703424', '#904936', '#a35c49',],

]

function generateRandomStrokeDashArray() {
  const numSegments = Math.floor(Math.random() * 8) + 2; // Generate a random number of segments between 3 and 7
  const maxValue = 500; // Maximum length for each segment
  const dashArray = [];

  for (let i = 0; i < numSegments; i++) {
    const segmentLength = Math.random() * maxValue;
    dashArray.push(segmentLength.toFixed(2));
  }

  return dashArray.join(', ');
}

const Button = ({...props}) => {
  return (
    <button className='button'  {...props}>
      {props.children}
    </button>
  )
}

function generateCoordinates(xMin, xMax, yMin, yMax, length) {
  const coordinates = Array.from({length}, () => {
    const x1 = xMin + Math.random() * (xMax - xMin);
    const y1 = yMin + Math.random() * (yMax - yMin);
    const x2 = xMin + Math.random() * (xMax - xMin);
    const y2 = yMin + Math.random() * (yMax - yMin);
    return { x1, y1, x2, y2 };
  });

  return coordinates;
}
function generateGeometricPalette() {
  const palette = [];
  
  // Generate random hue for the initial color
  const initialHue = Math.floor(Math.random() * 360);
  
  for (let i = 0; i < 16; i++) {
    // Generate random hue and saturation variations
    const hueVariation = Math.random() * randomInt(90,360);
    const saturationVariation = Math.random() * randomInt(0,100);
    const lightnessVariation = Math.random() * randomInt(0,70);
    
    // Calculate hue, saturation, and lightness values
    const hue = (initialHue + hueVariation + 180) % 360;
    const saturation = 40 + saturationVariation;
    const lightness = 30 + lightnessVariation;
    
    // Convert HSL to hexadecimal color code
    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    
    // Push the color to the palette
    palette.push(color);
  }
  
  return palette;
}
const introMessage = "Click or tap anywhere to continue..."
const introMessage2 = "...keep clicking"

const messages = [
"A color is generated",
"Another color is generated creating a gradient",
"We can add a line",
"or a bunch of lines",
"we can add a line",
"or a bunch of lines",
"or a shape",
"or a bunch of shapes",
"we can generate grids",
"we can randomize coordinates and cluster them in different ways",
]

export default function Home() {
  const size = useWindowSize()
  const height = size.height
  const width = size.width
  const gridUnits = [8, 16, 24, 32, 48, 64, 128, 256]
  const gapUnits = [2,4,8, 16, 24, 32, 48, 64, 128]
  const strokeWidthArray = [0,1,2,3,6,8,16,32,64,128,256]
  const linesArray = [2,3,4,8,12,16,32]
  const [octaves, setOctaves] = useState(randomInt(1,4))
  const [scale, setScale] = useState(sample([0,5,10,20,40,80,160,320,640,1000]))
  const [baseFrequency, setBaseFrequency] = useState(randomInt(0,randomInt(10,randomInt(20,10000))) / 100000)
  const [generatedDesignCount, setGeneratedDesignCount] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)
  const [gap, setGap] = useState(gapUnits[randomInt(0,gapUnits.length-1)])
  const [lines, setLines] = useState(linesArray[randomInt(0,linesArray.length-1)])
  const [rowsMax, setRowsMax] = useState(32)
  const [colsMax, setColsMax] = useState(32)

  const [gridUnit, setGridUnit] = useState(gridUnits[randomInt(0,gridUnits.length-1)])
  const [rows, setRows] = useState(randomInt(3,rowsMax))
  const [cols, setCols] = useState(randomInt(3,colsMax))
  const [symmetrical, setSymmetrical] = useState(false)
  const [cellWidth, setCellWidth] = useState(1000/cols)
  const [cellHeight, setCellHeight] = useState(1400/rows)

  const [baseColor, setBaseColor] = useState(randomColor())
  const [bgColor, setBgColor] = useState('black')
  const [textColor, setTextColor] = useState('white')
  const [bgColor2, setBgColor2] = useState(randomColor())
  const [maxLimit, setMaxLimit] = useState(randomInt(50,400))
  const [strokeWidth, setStrokeWidth] = useState(sample([0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,4,4,4,4,6,6,6,6,6,8,8,16,32,64,96,128]))
  const [colorsInt, setColorsInt] = useState(randomInt(0,100))
  const [mode, setMode] = useState(sample(['lab', 'lch']))
  const [palette, setPalette] = useState(sample(curated))
  const [coords, setCoords] = useState(undefined)
  const [density, setDensity] = useState(8)
  const [strokeDashArray, setStrokeDashArray] = useState(generateRandomStrokeDashArray())
  const [gradient,setGradient] = useState('url(#Gradient'+randomInt(0,15)+')')
  const [gradient2,setGradient2] = useState('url(#Gradient'+randomInt(0,15)+')')
  const [channelY,setChannelY] = useState(sample(['R','G','B']))
  const [channelX,setChannelX] = useState(sample(['R','G','B']))
  const [turbType,setTurbType] = useState(sample(['fractalNoise','turbulence']))

  const regenerateClick = () => {
    
    const newCount = generatedDesignCount +1
    setChannelX(sample(['R','G','B']))
    setChannelY(sample(['R','G','B']))
    setTurbType(sample(['fractalNoise', 'turbulence']))
    setOctaves(randomInt(1,8))
    setScale(randomInt(randomInt(1,500),2000))
    setBaseFrequency(randomInt(0,randomInt(10,randomInt(20,10000))) / 100000)
    setGridUnit(gridUnits[randomInt(0,gridUnits.length-1)])
    setGeneratedDesignCount(newCount)
    setCols(randomInt(2,32))
    setRows(randomInt(2,32))
    if (generatedDesignCount === 1) {
      setCoords(generateCoordinates(0,width,0,height,512))
    }
    if (newCount % 3 === 0 && newCount !== 1) {
      setMessageIndex((messageIndex + 1 ) % messages.length)
    }
    const newBgColor = palette[randomInt(0,palette.length-1)]
    setBgColor(newBgColor)
    setBgColor2(randomColor())
    setMaxLimit(randomInt(50,400))
    setStrokeWidth(sample([0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,4,4,4,4,6,6,6,6,6,8,8,16,32,64,96,128]))
    setTextColor(chroma.contrast(newBgColor, '#ffffff') > 4 ? 'white' : 'black' )
    setStrokeDashArray(generateRandomStrokeDashArray())

    //setSeed(Math.random());
    //setBaseFrequency(Math.random());
    //setNumOctaves(Math.floor(Math.random() * 10));


    //grid
    setLines(linesArray[randomInt(0,linesArray.length-1)])
    setBaseColor(randomColor())
    setColorsInt(randomInt(1,100))
    setGradient('url(#Gradient'+randomInt(0,15)+')')
    const newPalette = sample([
      chroma.scale([randomColor(), randomColor()]).mode(mode).colors(16),
      chroma.scale([randomColor(), randomColor(), randomColor()]).mode(mode).colors(16),
      chroma.scale([chroma(baseColor).darken(4), baseColor, chroma(baseColor).brighten(4)]).mode(mode).colors(16),
      //chroma.scale([chroma(baseColor).brighten(4), baseColor, chroma(baseColor).darken(4)]).mode(mode).colors(16),
      //chroma.scale(['#ff4f4f', baseColor, '#644fff']).mode(mode).colors(16),
      //chroma.scale([chroma('hsla(208,100%,10%,1)'), chroma('hsla(216,100%,90%,1)')]).mode(mode).colors(16),
      //chroma.scale([chroma('hsla(208,60%,10%,1)'), chroma('hsla(216,60%,90%,1)')]).mode(mode).colors(16),
      //chroma.scale([chroma('hsla(290,100%,10%,1)'), chroma('hsla(320,100%,90%,1)')]).mode(mode).colors(16),
      //chroma.scale([chroma('hsla(260,60%,10%,1)'), chroma('hsla(290,60%,90%,1)')]).mode(mode).colors(16),
      //chroma.scale([ '#FF4F4F', '#FF7A4F', '#7FFF4F', '#4FD8FF', '#644FFF' ]).mode(mode).colors(16),
      generateGeometricPalette(),
      [ '#FF355E', '#FD5B78', '#FF6037', '#FF9966', '#FFCC33', '#CCFF00', '#66FF66', '#AAF0D1', '#50BFE6', '#FF6EFF', '#732E6C', '#363958', '#5E2D79', '#4B0082', '#2E0854', '#FF9933'  ],
      [ '#E63946', '#F1C453', '#A8DADC', '#457B9D', '#1D3557', '#FFB6B9', '#CB997E', '#6D6875', '#2A9D8F', '#E9C46A', '#F4A261', '#5EAAA8', '#DD6E42', '#4F5D75', '#9A8C98', '#C08497', ],
      [ "#FCFAEE", "#FFFBF0", "#FEF8E6", "#FFEDD3", "#F9E0C7", "#F0D4BB", "#E2C8B0", "#D7BCA5", "#CAB09A", "#BDA48F", "#AF997F", "#A18E6F", "#927F5B", "#836F47", "#745F33", "#654E1F" ], // midsommar
      [ "#FF5252", "#FF4081", "#E040FB", "#7C4DFF", "#536DFE", "#448AFF", "#40C4FF", "#18FFFF", "#64FFDA", "#69F0AE", "#B2FF59", "#EEFF41", "#FFFF00", "#FFD740", "#FFAB40", "#FF6E40" ],
      [ "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722" ],
      [ "#FF5252", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#00BCD4", "#009688", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF5722", "#795548", "#607D8B", "#9E9E9E" ]

    ])
    setMode(sample(['lch', 'lab']))
    //setPalette(
    //  colorsInt > 94?
    //  [
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //    baseColor,
    //  ] : [
    //    newPalette[0],
    //    newPalette[1],
    //    newPalette[2],
    //    newPalette[3],
    //    newPalette[4],
    //    newPalette[5],
    //    newPalette[6],
    //    newPalette[7],
    //    newPalette[8],
    //    newPalette[9],
    //    newPalette[10],
    //    newPalette[11],
    //    newPalette[12],
    //    newPalette[13],
    //    newPalette[14],
    //    newPalette[15],
    //  ]
    //)
  }
  const regenerateCuratedPalette = () => {
    setPalette(sample(curated))
  }

  const regenerateColor = () => {
    setPalette(generateGeometricPalette())
  }
  const regenerateRandomColors = () => {
    setPalette(
      chroma.scale([randomColor(), randomColor(), randomColor()]).mode(mode).colors(16),
    )
  }
  const regenerateMonochrome = () => {
      setPalette(chroma.scale([chroma(baseColor).darken(4), baseColor, chroma(baseColor).brighten(4)]).mode(mode).colors(16))
  }
  const regenerateCoordinates = () => {
      setCoords(generateCoordinates(0,width,0,height,512))
  }

  const actions = [
    <Button key={uuidv4()} onClick={regenerateMonochrome}>Monochrome Palette</Button>,
    <Button key={uuidv4()} onClick={regenerateColor}>Geometric Palette</Button>,
    <Button key={uuidv4()} onClick={regenerateRandomColors}>Random Palette</Button>,
    <Button key={uuidv4()} onClick={regenerateCuratedPalette}>Curated Palette</Button>,
  ]


  return (
    <>
      <Head>
        <title>A Journey Through Generative Space</title>
        <meta name="description" content="Generated by Components AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name='theme-color' content={palette[15]} />
      </Head>
      <main style={{ position: 'relative', width: '100%', height: '100%', }} onClick={(e) => regenerateClick()}>
    {generatedDesignCount < 1 &&
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p>{introMessage}</p>
      </div>
    }
 
    {generatedDesignCount === 1 &&
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <p>{introMessage2}</p>
      </div>
    }
    {generatedDesignCount > 0 &&
    <svg id='canvas' height={height} viewBox={'0 0 '+width+ ' '+height} width={width} style={{ transition: 'all 1s ease-in', zIndex: -9, background: generatedDesignCount < 1? 'white': bgColor, minHeight: '100%', minWidth: '100%',}}>

      {generatedDesignCount > 1 &&
        <rect 
        x={0}
        y={0}
        height='100%'
        width='100%'
        style={{ 
          transition: 'all 1s ease-in', 
          height: height, 
          width: width, 
          fill: gradient
        }} />
      }
        <g style={{ filter: generatedDesignCount % 3 === 0 ? 'url(#displacementFilter)' : 'none' }}>
      {generatedDesignCount > 3 && generatedDesignCount < 8 &&
        <>
        <circle 
        r={width / 6}
        cx={width / 2}
        cy={height / 2}
        style={{ transition: 'all 1s ease-in', x:0,  y: 0, height: height, width: width, 
            fill: gradient,
            stroke: 'rgba(0,0,0,.05)',
        }} />
        
        </>
      }
      {generatedDesignCount > 7 && generatedDesignCount < 12 &&
        <>
        <rect 
        x={width/3}
        y={(height - (width/3)) /2}
        width={width / 3}
        height={width / 3}
        rx={generatedDesignCount > 9? randomInt(1,32) : 0}
        style={{ 
            transition: 'all 1s ease-in', 
            fill: gradient,
            stroke: 'rgba(0,0,0,.05)',
        }} />
        
        </>
      }
      {generatedDesignCount > 11 && generatedDesignCount < 16 &&
        <EquilateralTriangle canvasWidth={width} canvasHeight={height} size={width/3} fill={gradient} 
        stroke='rgba(0,0,0,.05)'
          />
      }
      {generatedDesignCount === 16 &&
          <line x1={width/2} x2={width/2} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
      }
      {generatedDesignCount === 17 &&
          <>
          <line x1={width/2} x2={width/2} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
          <line x1={width/2+16} x2={width/2+16} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
          <line x1={width/2-16} x2={width/2-16} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
          </>
      }
      {generatedDesignCount === 18 &&
          <>
          <line x1={width/2} x2={width/2} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
          <line x1={width/2+16} x2={width/2+16} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
          <line x1={width/2-16} x2={width/2-16} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
          <line x1={width/2+32} x2={width/2+32} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
          <line x1={width/2-32} x2={width/2-32} y1={height/3} y2={height/3*2} stroke='black' strokeWidth={strokeWidth} />
          </>
      }
      {(generatedDesignCount > 18 && generatedDesignCount < 23) &&
          <LineGridVertical lines={cols * density} strokeWidth={strokeWidth} palette={palette} cols={cols} rows={rows} animate={generatedDesignCount % 9 === 0? true : false} width={width} height={height} strokeDashArray={generatedDesignCount > 12? strokeDashArray : 'none'} />
      }
      {generatedDesignCount > 22 && generatedDesignCount < 27 &&
          <>
          <LineGridHorizontal lines={rows * density} strokeWidth={1} palette={palette} cols={cols} rows={rows} width={width} height={height} yOffset={0} animate={generatedDesignCount % 9 ===0? true : false} strokeDashArray={strokeDashArray} />
          </>
      }
      {generatedDesignCount > 25 && generatedDesignCount < 40 &&
          <>
          <LineGridVertical lines={cols * density} strokeWidth={strokeWidth} palette={palette} cols={cols} rows={rows} width={width} height={height} strokeDashArray={strokeDashArray} />
          <LineGridHorizontal lines={cols * density} strokeWidth={strokeWidth} palette={palette} cols={cols} rows={rows} width={width} height={height} yOffset={0} strokeDashArray={strokeDashArray} />
          </>
      }


      {generatedDesignCount > 39 && generatedDesignCount < 45  &&
          <RectGrid palette={palette} cols={cols} rows={rows} width={width} height={height} strokeWidth={strokeWidth} 
            fill={generatedDesignCount % 4 === 0 ? gradient : palette[randomInt(0,15)]}
          />
      }
      {generatedDesignCount > 44 && generatedDesignCount < 10000 &&
          <>
          <ShapeGrid palette={palette} cols={cols} rows={rows} width={width} height={height} strokeWidth={strokeWidth} 
            fill={generatedDesignCount % 3 === 0 ? gradient : palette[randomInt(0,15)]}
          />
          </>
      }
      {generatedDesignCount > 44 && generatedDesignCount < 99  &&
          <g>
          <LineGridVertical lines={cols * density} strokeWidth={strokeWidth} palette={palette} cols={cols} rows={rows} width={width} height={height} strokeDashArray={strokeDashArray} />
          <Circles width={width} height={height} stroke={gradient2} />
          </g>
      }
      {generatedDesignCount > 99 && generatedDesignCount < 129  &&
          <>
        <LineGridVertical lines={cols * density} strokeWidth={strokeWidth} palette={palette} cols={cols} rows={rows} width={width} height={height} strokeDashArray={strokeDashArray} />
      <PolarGraph width={width}  strokeWidth={strokeWidth} height={height} bgColor={bgColor} circles={cols} radialLines={rows} style={{ mixBlendMode: 'multiply'}}/>
          </>
      }
      </g>
    </svg>
    }
    {generatedDesignCount > 0 &&
    <svg height='0' width='0' style={{ height: 0, width: 0, display: 'block'}}>
      <defs>
        <linearGradient id='Gradient0' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[0]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient1' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[1]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]} />
        </linearGradient>
        <linearGradient id='Gradient2' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[2]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient3' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[3]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient4' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[4]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient5' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[5]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient6' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[6]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient7' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[7]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient8' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[8]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient9' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[9]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient10' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[10]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient11' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[11]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient12' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[12]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient13' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[13]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient14' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[14]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient15' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[15]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
        <linearGradient id='Gradient16' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor={palette[randomInt(0,15)]}  />
          <stop offset='100%' stopColor={palette[randomInt(0,15)]}  />
        </linearGradient>
  <filter id="displacementFilter">
    <feTurbulence
      type={turbType}
      baseFrequency={baseFrequency}
      numOctaves={octaves}
      result="turbulence" />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale={scale}
      xChannelSelector={channelX}
      yChannelSelector={channelY} />
  </filter>
      </defs>
    </svg>    
    }
   <kbd style={{ padding: '16px', color: 'white', background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, right: 0,  }}>{generatedDesignCount}</kbd> 
    <footer style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'transparent', padding: '16px', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
      {generatedDesignCount % 6 === 0 && generatedDesignCount !== 0 &&
        <>
          {actions[randomInt(0,actions.length-1)]}
          {actions[randomInt(0,actions.length-1)]}
        </>
      }
    </footer>
      </main>
    </>
  )
}



// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
