@echo off

set /p ipAddress=Enter IP Address of Computer:

start cmd /k "echo Node 2 && cd node2 && geth --datadir "./data"  --port 30306 --bootnodes enode://75dc76b67ef9628747e19af7613c1df88572b3031d2c199febae52998c204ae9009a45b02910b59ce1b87e410f36ca929181cadf2c3d17ab17811c82d403d669@%ipAddress%:0?discport=30301  --authrpc.port 8546 --networkid 20032002 --unlock 0xd00f5E487f1347e35d69FBf7957f25664E9BEf45 --password password.txt"
start cmd /k "echo Browser && cd C:\Program Files\BraveSoftware\Brave-Browser\Application && brave.exe --user-data-dir="C://Chrome dev session" --disable-web-security "http://127.0.0.1:5500/" "

pause > nul
