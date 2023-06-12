 return (
		<div className="container bg-black w-full">
			{nav.map((r, i) => {
				if (!r.isPrivate && r.isMenu) {
					return <MenuItem key={i} r={r} />;
				} else if (user.isAuthenticated && r.isMenu) {
					return <MenuItem key={i} r={r} />;
				} else return false;
			})}

			{user.isAuthenticated ? (
				<div className="">
					<Link to={"#"} onClick={logout}>
						Log out
					</Link>
				</div>
			) : (
				<div className="">
					<Link to={"login"}>Log in</Link>
				</div>
			)}
		</div>
); 
    


    