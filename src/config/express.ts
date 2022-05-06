import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import routes from '../routes';

const createServer = (): express.Application => {

    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());
    app.use(helmet())
    app.disable('x-powered-by');
    app.use(routes)
    // app.engine('handlebars', engine());
    // app.set('view engine', 'handlebars');
    // app.set('views', path.resolve(__dirname, '..', 'views'));
    // app.use('/upload', express.static(
    //     path.resolve(__dirname, "..", "public", "reports")
    // ));

    return app;

}

export { createServer };

