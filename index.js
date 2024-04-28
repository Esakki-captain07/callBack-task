let root = document.getElementById("task")
let node = document.createElement("h1")
root.append(node)
setTimeout(()=>{
node.innerText = "10"
  setTimeout(()=>{
    node.innerText = "9"
    setTimeout(()=>{
      node.innerText = "8"
      setTimeout(()=>{
        node.innerText = "7"
        setTimeout(()=>{
        node.innerText = "6"
          setTimeout(()=>{
           node.innerText = "5"
            setTimeout(()=>{
            node.innerText = "4"
              setTimeout(()=>{
                node.innerText = "3"
                setTimeout(()=>{
                  node.innerText = "2"
                  setTimeout(()=>{
                  node.innerText = "1"
                    setTimeout(()=>{
                     node.innerText = "HAPPY INDIPENDENS DAY"
                    },1000)
                  },1000)
                },1000)
              },1000)
            },1000)
          },1000)
        },1000)
      },1000)
    },1000)
  },1000)
},1000)