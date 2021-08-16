export interface ISettings {
  specToken: string;
  specPool: string;
  specLpToken: string;
  gov: string;
  platform: string;
  warchest: string;
  wallet: string;
  mirrorFarm: string;
  mirrorStaking: string;
  mirrorGov: string;
  mirrorToken: string;
  specFarm: string;
  terraSwapFactory: string;
  staker: string;
  anchorGov: string;
  anchorStaking: string;
  anchorToken: string;
  anchorFarm: string;
  pylonGov: string;
  pylonStaking: string;
  pylonToken: string;
  pylonFarm: string;
  lcd: string;
  fcd: string;
  mirrorGraph: string;
  anchorGraph: string;
  pylonAPI: string;
  chainID: string;
}
export const networks: Record<string, ISettings> = {
  mainnet: {
    specToken: 'terra1s5eczhe0h0jutf46re52x5z4r03c8hupacxmdr',
    specPool: 'terra1tn8ejzw8kpuc87nu42f6qeyen4c7qy35tl8t20',
    specLpToken: 'terra1y9kxxm97vu4ex3uy0rgdr5h2vt7aze5sqx7jyl',
    gov: 'terra1dpe4fmcz2jqk6t50plw0gqa2q3he2tj6wex5cl',
    platform: 'terra1vvu80qnl0yn94stkc9sy2f5xcqcscu2fercgzq',
    warchest: 'terra14v8aeq4289fk7z08jvaw3qu3hers6whrdkqffp',
    wallet: 'terra1dretwqx84u229rjfgkp0j6avc3fusp000ejrz9',
    mirrorFarm: 'terra1kehar0l76kzuvrrcwj5um72u3pjq2uvp62aruf',
    mirrorStaking: 'terra17f7zu97865jmknk7p2glqvxzhduk78772ezac5',
    mirrorGov: 'terra1wh39swv7nq36pnefnupttm2nr96kz7jjddyt2x',
    mirrorToken: 'terra15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6',
    specFarm: 'terra17hjvrkcwn3jk2qf69s5ldxx5rjccchu35assga',
    terraSwapFactory: 'terra1ulgw0td86nvs4wtpsc80thv6xelk76ut7a7apj',
    staker: 'terra1fxwelge6mf5l6z0rjpylzcfq9w9tw2q7tewaf5',
    anchorGov: 'terra1f32xyep306hhcxxxf7mlyh0ucggc00rm2s9da5',
    anchorStaking: 'terra1897an2xux840p9lrh6py3ryankc6mspw49xse3',
    anchorToken: 'terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76',
    anchorFarm: 'terra1fqzczuddqsdml37a20pysjx5wk9dh4tdzu2mrw',
    pylonGov: 'terra1rqkyau9hanxtn63mjrdfhpnkpddztv3qav0tq2',
    pylonStaking: 'terra19nek85kaqrvzlxygw20jhy08h3ryjf5kg4ep3l',
    pylonToken: 'terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy',
    pylonFarm: '',
    lcd: 'https://lcd.terra.dev',
    fcd: 'https://fcd.terra.dev',
    mirrorGraph: 'mirror',
    anchorGraph: 'anchor',
    pylonAPI: 'https://api.pylon.money',
    chainID: 'columbus-4',
  },
  testnet: {
    specToken: 'terra1kvsxd94ue6f4rtchv2l6me5k07uh26s7637cza',
    specPool: 'terra15cjce08zcmempedxwtce2y44y2ayup8gww3txr',
    specLpToken: 'terra1ntt4mdhr9lukayenntgltqppw4yy6hts7wr67d',
    gov: 'terra1x3l2tkkwzzr0qsnrpy3lf2cm005zxv7pun26x4',
    platform: 'terra10h22vx3kp8wxdkuhypmwnjr4wrurcup5pk9uq9',
    warchest: 'terra1ulpamdq7lsg5hu0hzvl4skxt0ahtxs0enyu96e',
    wallet: 'terra1u4kg5h8zrwvtr30h2hwhnj64ekml4uar65plvm',
    mirrorFarm: 'terra1hasdl7l6xtegnch8mjyw2g7mfh9nt3gtdtmpfu',
    mirrorStaking: 'terra1a06dgl27rhujjphsn4drl242ufws267qxypptx',
    mirrorGov: 'terra12r5ghc6ppewcdcs3hkewrz24ey6xl7mmpk478s',
    mirrorToken: 'terra10llyp6v3j3her8u3ce66ragytu45kcmd9asj3u',
    specFarm: 'terra1cedx8gpvu7c4vzfadwmf3pewg2030fqgw4q3dl',
    terraSwapFactory: 'terra18qpjm4zkvqnpjpw0zn0tdr8gdzvt8au35v45xf',
    staker: 'terra15nwqmmmza9y643apneg0ddwt0ekk38qdevnnjt',
    anchorGov: 'terra16ckeuu7c6ggu52a8se005mg5c0kd2kmuun63cu',
    anchorStaking: 'terra19nxz35c8f7t3ghdxrxherym20tux8eccar0c3k',
    anchorToken: 'terra1747mad58h0w4y589y3sk84r5efqdev9q4r02pc',
    anchorFarm: 'terra1yvpd3j7mry7qrmmn2x9vapmr9qpzkvjgs4f7z7',
    pylonGov: 'terra1hffjqjscxgz5lnmmtwhksrcg4gd3x4nyp9mzwx',
    pylonStaking: 'terra17av0lfhqymusm6j9jpepzerg6u54q57jp7xnrz',
    pylonToken: 'terra1lqm5tutr5xcw9d5vc4457exa3ghd4sr9mzwdex',
    pylonFarm: 'terra1hgjp2yjqe7ngzsx283tm7ch8xcsvk5c8mdj2tw',
    lcd: 'https://tequila-lcd.terra.dev',
    fcd: 'https://tequila-fcd.terra.dev',
    mirrorGraph: 'mirrorTest',
    anchorGraph: 'anchorTest',
    pylonAPI: 'https://api.dev.pylon.rocks',
    chainID: 'tequila-0004',
  },
};
