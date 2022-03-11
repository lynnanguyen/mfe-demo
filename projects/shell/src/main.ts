// import('./bootstrap')
// 	.catch(err => console.error(err));

// https://github.com/angular-architects/module-federation-plugin/blob/main/libs/mf/tutorial/tutorial.md
// Ideally, we load the remote entry upfront before Angular bootstraps.
// In this early phase, Module Federation tries to determine the highest compatible versions of all dependencies.
// Let's assume, the shell provides version 1.0.0 of a dependency (specifying ^1.0.0 in its package.json)
// and the micro frontend uses version 1.1.0 (specifying ^1.1.0 in its package.json).
// In this case, they would go with version 1.1.0.
// However, this is only possible if the remote's entry is loaded upfront.
import { loadRemoteEntry  } from '@angular-architects/module-federation';

Promise.all([
	loadRemoteEntry({type: 'module', remoteEntry: 'http://localhost:3000/remoteEntry.js'})
])
	.catch(err => console.error('Error loading remote entries', err))
	.then(() => import('./bootstrap'))
	.catch(err => console.error(err));