import './final.css';
import Sidebar from './sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {
    AboutUs,
    Services,
    Events,
    Contact,
    Support
} from '../content/about';
import Dashboard from '../components/dashboard/dashboard';

function Final() {
    return(
        <Router>
            <Sidebar/>
            <Switch>
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/scheduled-kyc" exact component={Services} />
                <Route path="/settings" exact component={Contact} />
                <Route path="/user-management" exact component={Events} />
            </Switch>
        </Router>
    );
}

export default Final;