import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import WebcamCapture from "./WebcamCapture";
import Preview from "./Preview";
import Chats from "./Chats";
import ChatView from "./ChatView";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectuser, login } from "./features/appSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
	const user = useSelector(selectuser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(
					login({
						username: authUser.displayName,
						profilePic: authUser.photoURL,
						id: authUser.uid,
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, []);

	return (
		<div className="App">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<img
							className="app_logo"
							src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg"
							alt=""
						/>
						<div className="app_body">
							<div className="body_background">
								<Switch>
									<Route path="/chats/view">
										<ChatView />
									</Route>
									<Route path="/chats">
										<Chats />
									</Route>
									<Route path="/preview">
										<Preview />
									</Route>
									<Route exact path="/">
										<WebcamCapture />
									</Route>
								</Switch>
							</div>
						</div>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;
