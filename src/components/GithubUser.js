import React from 'react';
import axios from 'axios'

class GithubUser extends React.Component {

    state = {
        popularRepos: undefined
    }
    
    
    componentDidMount () {
        axios.get('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&limit=10')
            .then( res => res.data.items)
            .then( repos => {

                console.log(repos);


                this.setState({
                    popularRepos: repos
                })

            });
    }

    extractPopularData = (repo) => {
        return {
            id: repo.id,
            avatar_url: repo.avatar_url,
            name: repo.name,
            stargazers_count: repo.stargazers_count
        }
    }
    
    render() {

        let popular = 'Loading ...';

        if(this.state.popularRepos) {

            popular = this.state.popularRepos.map(popular => {
                return (
                    <li key={popular.id}>
                        <img src={popular.owner.avatar_url} alt=""/>
                        <h3>Name: {popular.name}</h3>
                        <span>Stars: {popular.stargazers_count}</span>
                    </li>
                )
            })
        }


        return (
            <div>
                <ul className="l-github-popular">
                {popular}
                </ul>
            </div>
        )
    }
}

export default GithubUser