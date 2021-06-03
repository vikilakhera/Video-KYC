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

function Final() {
    return(
        <Router>
            <Sidebar/>
            <Switch>
                <Route path="/dashboard" exact component={AboutUs} />
                <Route path="/generate-case" exact component={Services} />
                <Route path="/arbitrations" exact component={Contact} />
                <Route path="/mediations" exact component={Events} />
                <Route path="/conciliations" exact component={Support} />
                <Route path="/claims" exact component={Support} />
                <Route path="/profile" exact component={Support} />
                <Route path="/judgement-orders" exact component={Support} />
                <Route path="/contact" exact component={Support} />
            </Switch>
        </Router>
    );
}

export default Final;