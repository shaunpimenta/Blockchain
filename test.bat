@echo off

start cmd /k "echo Boot Node && cd bnode && bootnode -nodekey boot.key -verbosity 7 -addr "127.0.0.1:30301" "
timeout /nobreak /t 1 > nul
start cmd /k "echo Node 1 && cd node1 && geth --datadir "./data"  --port 30304 --bootnodes enode://75dc76b67ef9628747e19af7613c1df88572b3031d2c199febae52998c204ae9009a45b02910b59ce1b87e410f36ca929181cadf2c3d17ab17811c82d403d669@127.0.0.1:0?discport=30301 --authrpc.port 8547 --ipcdisable --allow-insecure-unlock  --http --http.corsdomain="https://remix.ethereum.org" --http.api web3,eth,debug,personal,net --networkid 20032002 --unlock 0x38adFb8C56BeA6e91602D77658c336834f20B228 --password password.txt  --mine --miner.etherbase=0x38adFb8C56BeA6e91602D77658c336834f20B228"
timeout /nobreak /t 1 > nul
start cmd /k "echo Node 2 && cd node2 && geth --datadir "./data"  --port 30306 --bootnodes enode://75dc76b67ef9628747e19af7613c1df88572b3031d2c199febae52998c204ae9009a45b02910b59ce1b87e410f36ca929181cadf2c3d17ab17811c82d403d669@127.0.0.1:0?discport=30301  --authrpc.port 8546 --networkid 20032002 --unlock 0xd00f5E487f1347e35d69FBf7957f25664E9BEf45 --password password.txt"
start cmd /k "echo Browser && cd C:\Program Files\BraveSoftware\Brave-Browser\Application && brave.exe --user-data-dir="C://Chrome dev session" --disable-web-security "http://127.0.0.1:5500/" "

pause > nul

