console.log("Before")
const user = 
getUser(1)
.then(user => getRepo(user.username))
.then(repo => getCommits(repo.repo[1]))
.then(commits => console.log(commits))


console.log("After")

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({'username': 'mariam'})
        }, 2000)
    })
   

}
function getRepo(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'repo': ['repo1', 'repo2', 'repo3']})
        }, 2000)
    })
}
function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'commits': ['commit1', 'commit2', 'commit2']})
        }, 2000)
    })
}