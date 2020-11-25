import * as React from "react";
import axios from "axios";

const testData = [
    {key: 810438, name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {key: 6820, name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {key: 63648, name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

/*
 * react.development.js:220 Warning: Each child in a list should have a unique "key" prop.
 */
const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
    </div>
);

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url} style={{width: 75+'px'}}/>
                <div style={{display: 'inline-block', marginLeft: 12+'px'}}>
                    <div className="name" style={{fontSize: 1.25+'rem', fontWeight: 'bold'}}>{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}
// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn
class Form extends React.Component {
    state = { userName: '' };
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({username:''});
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{border: 'thin solid #888', padding: 2+'rem', marginBottom: 2+'rem', display: 'flex', justifyContent: 'center'}}>
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    placeholder="GitHub username"
                    required
                />
                <button>Add card</button>
            </form>
        );
    }
}

export class GithubCardApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profiles: testData
        };
    }
    addNewProfile = (profileData) => {
        this.setState(prevState => ({profiles: [...prevState.profiles, profileData]}))
    };
    render() {
        const headerStyle = {
            textAlign: 'center',
            fontSize: 1.5+'rem',
            marginBottom: 1+'rem'
        };
        return (
            <>
                <h1>Data : Github card</h1>
                <div style={headerStyle}>{this.props.title}</div>
                <Form onSubmit={this.addNewProfile}/>
                <CardList profiles={this.state.profiles}/>
            </>
        );
    }
}

