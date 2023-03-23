import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { RouteView } from './common/Routes/RouteView';

const Login = React.lazy(() => import('@/features/Auth/Login'));
const Register = React.lazy(() => import('@/features/Auth/Register'));
const Panel = React.lazy(() => import('@/features/Panel/Panel'));
const Languages = React.lazy(() => import('@/features/Languages/Languages'));

export const AnimatedRoutes = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route
					path="/login"
					element={<RouteView guestOnly component={<Login />} />}
				/>
				<Route
					path="/register"
					element={<RouteView guestOnly component={<Register />} />}
				/>
				<Route
					path="/panel"
					element={
						<RouteView component={<RouteView component={<Panel />} />} />
					}
				/>
				<Route
					path="/panel/languages"
					element={
						<RouteView component={<RouteView component={<Languages />} />} />
					}
				/>
			</Routes>
		</AnimatePresence>
	);
};
