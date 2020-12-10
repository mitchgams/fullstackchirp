import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Edit from './components/view/Edit/';
import Add from  './components/view/Add';
import User from './components/view/User';

const App: React.FC<IAppProps> = props => {

	return (
		<BrowserRouter>
			<Header />
			<main className="container">
				<Switch>
					<Route exact path="/:id/admin"><Edit /></Route>
					<Route exact path="/chirp/add"><Add /></Route>
					<Route exact path="/user/:name"><User /></Route>
					<Route path="/"><Home /></Route>
				</Switch>
			</main>
		</BrowserRouter>
	);
}


export interface IAppProps {}

export default App;