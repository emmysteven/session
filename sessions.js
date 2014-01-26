/*
 **@Name: sessions.js
 **@Author: Emmy Steven
 **@Co-author: Ifeora Okechukwu
 **@Editor: Sublime Text 3
 **@Date: 01-22-2014
 **@Pattern: Module Pattern
 **@Function: Monitors user's inactivity for a specified period and then logs the user out!!!
 **@Licence: GPL 3.0
 	Copyright (C) 2014  Emmy Steven & Ifeora Okechukwu

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var sessions = (function(sessions) {
		var _idle_flag = false,
			_idle_counter = 0,
			check_idle_time,
			IDLE_PERIOD,
			_idle_check,
			idle_elem,
			events,
			url,
			run;

		_idle_check = function() {
			if (_idle_flag) {
				if (_idle_counter >= IDLE_PERIOD) document.location.href = url;
			} else {
				_idle_counter = 0;
			}
		};

		events = function(e) {
			if (e.type == "click" || e.type == "mousemove" || e.type == "keypress")
				_idle_check();
		};

		document.onclick = document.onmousemove = document.onkeypress = events;

		check_idle_time = function(elem, tm) {
			++_idle_counter;
			if (elem !== '') {
				elem.style.display = 'block';
				elem.innerHTML = (IDLE_PERIOD - _idle_counter) + '';
		}
		if (_idle_counter == IDLE_PERIOD) _idle_flag = true;

		return _idle_flag;
	};

	sessions.init = function(mUrl, opt) {
		var opt = opt || {};
		idle_elem = ( !! opt.element && typeof opt.element === 'string') ? document.getElementById(opt.element) : '';
		url = ( !! mUrl && typeof mUrl === 'string') ? mUrl : '';
		IDLE_PERIOD = ( !! opt.time && typeof opt.time === 'number') ? opt.time : 20 * 60;

		run = window.setInterval(function() {
			var rep = check_idle_time(idle_elem, IDLE_PERIOD);
			if (rep) clearTimeout(run);
		}, 1000);
	};

	return sessions;
})(sessions || {});
