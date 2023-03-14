import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { RouteView } from './RouteView';

const Login = React.lazy(() => import('@/features/Auth/Login'));
const Register = React.lazy(() => import('@/features/Auth/Register'));

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
			</Routes>
		</AnimatePresence>
	);
};
