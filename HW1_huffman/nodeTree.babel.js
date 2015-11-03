
class NodeTree {
  constructor({name, val, leftNode=null, rightNode=null}){
    this.name = name
    this.val = val
    this.leftNode = leftNode
    this.rightNode = rightNode
  }
  getLeft(){
    return this.leftNode
  }
  getRight(){
    return this.rightNode
  }
}

function growTree(data){
  data = data.sort( (a, b) => a.val < b.val )
  if(data.length > 2){
    let left = data.pop(),
    right = data.pop();
    data.push(new NodeTree({
      name: left.name + right.name,
      val: left.val + right.val,
      leftNode: left,
      rightNode: right
    }))
    return growTree(data)
  } else if(data.length == 2){
    let left = data.pop(),
    right = data.pop();
    return new NodeTree({
      name: left.name + right.name,
      val: left.val + right.val,
      leftNode: left,
      rightNode: right
    })
  }
}

function getCode(node, parentNode){
  let name = node.name;
  if(name === parentNode.name){
    return ''
  }else if(parentNode.getLeft().name.match(name) !== null){
    return '0' + getCode(node, parentNode.getLeft())
  } else {
    return '1' + getCode(node, parentNode.getRight())
  }
}
