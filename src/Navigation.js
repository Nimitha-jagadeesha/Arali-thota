export default function Navigation() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <img src={process.env.PUBLIC_URL + "favicon.avif"} height={30} alt="Dream->code->Achieve" />
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav">
                    <a href="#Intro" class="nav-item nav-link active">Introduction</a>
                </div>
            </div>
        </div>
    </nav>
    )
}
