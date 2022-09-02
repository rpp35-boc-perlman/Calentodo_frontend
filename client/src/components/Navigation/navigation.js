import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

export default function navigation() {
  return (<div>
    <nav className="navbar">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/todo">Todos</Link>
      <Link className="link" to="/statistics">Statistics</Link>
      <Link className="link" to="/sharedCalendars">SharedCalendars</Link>
    </nav>
  </div>)
}