s/'(.*?)'/\x1b[36m&\x1b[0m/g 
s/`(.*?)`/\x1b[36m&\x1b[0m/g 
s/"(.*?)"/\x1b[36m&\x1b[0m/g
s/\b(do|if|in|for|let|new|try|var|case|else|enum|eval|null|this|true|void|with|await|break|catch|class|const|false|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)\b/\x1b[35m&\x1b[0m/g

