import React from 'react';
import './App.css';

function App() {
  // Function to handle PDF download
  const handleMipmapClick = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/android-slips.pdf';
    link.download = 'TY BCA Android Slips-wise Solutions.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="app">
      {/* Top Navigation Bar */}
      <div className="top-nav">
        <div className="nav-left">
          <div className="as-logo">
            <img src="/android-studio-icon.webp" alt="Android Studio" width="24" height="24" />
          </div>
          <div className="menu-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <rect y="3" width="20" height="2" rx="1"/>
              <rect y="9" width="20" height="2" rx="1"/>
              <rect y="15" width="20" height="2" rx="1"/>
            </svg>
          </div>
          <div className="project-selector">
            <div className="project-icon">MA</div>
            <span>My Application</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L3 5h6l-3 3z"/>
            </svg>
          </div>
          <div className="version-control">
            <span>Version Control</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L3 5h6l-3 3z"/>
            </svg>
          </div>
        </div>
        <div className="nav-center">
          <div className="toolbar-icons">
            <div className="icon-btn" title="Run">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4 2l10 6-10 6V2z"/>
              </svg>
            </div>
            <div className="device-selector">
              <span>Pixel 5</span>
              <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 8L3 5h6l-3 3z"/>
              </svg>
            </div>
            <div className="icon-btn" title="Device Manager">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect x="4" y="2" width="8" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="8" cy="12" r="0.8"/>
              </svg>
            </div>
            <div className="icon-btn" title="Run">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#4CAF50">
                <path d="M4 2l10 6-10 6V2z"/>
              </svg>
            </div>
            <div className="icon-btn" title="Debug">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="8" cy="5" r="2"/>
                <path d="M5 8h6M8 8v5M6 13h4"/>
                <path d="M4 9l-2 2M12 9l2 2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <div className="icon-btn" title="More">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="8" cy="3" r="1"/>
                <circle cx="8" cy="8" r="1"/>
                <circle cx="8" cy="13" r="1"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="nav-right">
          <div className="icon-btn" title="Build">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M13 5l-2-2-6 6 2 2 6-6zM9 11l-2 2 1.5 1.5 2-2L9 11z"/>
            </svg>
          </div>
          <div className="icon-btn" title="Search">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="7" cy="7" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="10" y1="10" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="icon-btn" title="Structure">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="2" y="2" width="5" height="2"/>
              <rect x="2" y="6" width="5" height="2"/>
              <rect x="2" y="10" width="5" height="2"/>
              <rect x="9" y="2" width="5" height="2"/>
              <rect x="9" y="6" width="5" height="2"/>
              <rect x="9" y="10" width="5" height="2"/>
            </svg>
          </div>
          <div className="icon-btn" title="Settings">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="8" cy="8" r="2"/>
              <path d="M8 1v2M8 13v2M15 8h-2M3 8H1M13.5 2.5l-1.4 1.4M3.9 12.1l-1.4 1.4M13.5 13.5l-1.4-1.4M3.9 3.9L2.5 2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <div className="icon-btn" title="Plugins">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="3" y="3" width="10" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="8" cy="8" r="2"/>
            </svg>
          </div>
          <div className="icon-btn" title="Search Everywhere">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="7" cy="7" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="10" y1="10" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <div className="icon-btn" title="Settings">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="8" cy="8" r="2"/>
              <path d="M8 1v2M8 13v2M15 8h-2M3 8H1M13.5 2.5l-1.4 1.4M3.9 12.1l-1.4 1.4M13.5 13.5l-1.4-1.4M3.9 3.9L2.5 2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          <div className="icon-btn" title="Account">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="8" cy="5" r="3"/>
              <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
            </svg>
          </div>
          <div className="icon-btn">−</div>
          <div className="icon-btn">□</div>
          <div className="icon-btn">✕</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Left Sidebar */}
        <div className="left-sidebar">
          <div className="sidebar-icons">
            <div className="icon-item active" title="Project">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 3h6v6H3V3zm8 0h6v6h-6V3zM3 11h6v6H3v-6zm8 0h6v6h-6v-6z"/>
              </svg>
            </div>
            <div className="icon-item" title="Structure">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <circle cx="10" cy="4" r="2"/>
                <circle cx="4" cy="16" r="2"/>
                <circle cx="16" cy="16" r="2"/>
                <line x1="10" y1="6" x2="10" y2="12" stroke="currentColor" strokeWidth="2"/>
                <line x1="10" y1="12" x2="4" y2="14" stroke="currentColor" strokeWidth="2"/>
                <line x1="10" y1="12" x2="16" y2="14" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="icon-item" title="Search">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <circle cx="8" cy="8" r="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="12" x2="17" y2="17" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="icon-item" title="More">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <circle cx="10" cy="4" r="1.5"/>
                <circle cx="10" cy="10" r="1.5"/>
                <circle cx="10" cy="16" r="1.5"/>
              </svg>
            </div>
            <div className="icon-item" title="Build">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15 8l-3-3-8 8 3 3 8-8zm-2 5l-3 3 2 2 3-3-2-2z"/>
              </svg>
            </div>
            <div className="icon-item" title="Run">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3l12 7-12 7V3z"/>
              </svg>
            </div>
            <div className="icon-item" title="Info">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="10" cy="6" r="1"/>
                <rect x="9" y="9" width="2" height="6" rx="1"/>
              </svg>
            </div>
            <div className="icon-item" title="App Inspector">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <rect x="3" y="3" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                <rect x="7" y="7" width="6" height="6" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Project Explorer */}
        <div className="project-explorer">
          <div className="explorer-header">
            <span className="android-label">Android</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L3 5h6l-3 3z"/>
            </svg>
          </div>
          <div className="explorer-tree">
            <div className="tree-item expanded">
              <svg className="arrow" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M4 3l4 3-4 3V3z"/>
              </svg>
              <svg className="folder-icon" width="16" height="16" viewBox="0 0 16 16" fill="#8BC34A">
                <path d="M2 3h5l2 2h5v8H2V3z"/>
              </svg>
              <span>app</span>
            </div>
            <div className="tree-item nested">
              <svg className="arrow-collapsed" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M4 3l4 3-4 3V3z"/>
              </svg>
              <svg className="folder-icon" width="16" height="16" viewBox="0 0 16 16" fill="#64B5F6">
                <path d="M2 3h5l2 2h5v8H2V3z"/>
              </svg>
              <span>manifests</span>
            </div>
            <div className="tree-item nested">
              <svg className="arrow-collapsed" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M4 3l4 3-4 3V3z"/>
              </svg>
              <svg className="folder-icon" width="16" height="16" viewBox="0 0 16 16" fill="#64B5F6">
                <path d="M2 3h5l2 2h5v8H2V3z"/>
              </svg>
              <span>kotlin+java</span>
            </div>
            <div className="tree-item nested expanded">
              <svg className="arrow" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M3 4l3 4 3-4H3z"/>
              </svg>
              <svg className="folder-icon" width="16" height="16" viewBox="0 0 16 16" fill="#64B5F6">
                <path d="M2 3h5l2 2h5v8H2V3z"/>
              </svg>
              <span>res</span>
            </div>
            <div className="tree-item nested-2">
              <svg className="arrow-collapsed" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M4 3l4 3-4 3V3z"/>
              </svg>
              <svg className="folder-icon" width="16" height="16" viewBox="0 0 16 16" fill="#FFA726">
                <path d="M2 3h5l2 2h5v8H2V3z"/>
              </svg>
              <span>drawable</span>
            </div>
            <div className="tree-item nested-2 expanded">
              <svg className="arrow" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M3 4l3 4 3-4H3z"/>
              </svg>
              <svg className="folder-icon" width="16" height="16" viewBox="0 0 16 16" fill="#FFA726">
                <path d="M2 3h5l2 2h5v8H2V3z"/>
              </svg>
              <span>layout</span>
            </div>
            <div className="tree-item nested-3 selected">
              <span className="indent"></span>
              <svg className="file-icon" width="16" height="16" viewBox="0 0 16 16" fill="#9C27B0">
                <path d="M3 2h7l3 3v9H3V2z"/>
                <path d="M10 2v3h3" fill="none" stroke="#2b2b2b" strokeWidth="1"/>
              </svg>
              <span>activity_main.xml</span>
            </div>
            <div className="tree-item nested-2 clickable-download" onClick={handleMipmapClick}>
              <svg className="arrow-collapsed" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M4 3l4 3-4 3V3z"/>
              </svg>
              <svg className="folder-icon" width="16" height="16" viewBox="0 0 16 16" fill="#FFA726">
                <path d="M2 3h5l2 2h5v8H2V3z"/>
              </svg>
              <span>mipmap</span>
            </div>
            <div className="tree-item nested-2">
              <svg className="arrow-collapsed" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M4 3l4 3-4 3V3z"/>
              </svg>
              <svg className="folder-icon" width="16" height="16" viewBox="0 0 16 16" fill="#FFA726">
                <path d="M2 3h5l2 2h5v8H2V3z"/>
              </svg>
              <span>values</span>
            </div>
            <div className="tree-item nested-2">
              <svg className="arrow-collapsed" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M4 3l4 3-4 3V3z"/>
              </svg>
              <svg className="folder-icon" width="16" height="16" viewBox="0 0 16 16" fill="#FFA726">
                <path d="M2 3h5l2 2h5v8H2V3z"/>
              </svg>
              <span>xml</span>
            </div>
            <div className="tree-item expanded">
              <svg className="arrow" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M3 4l3 4 3-4H3z"/>
              </svg>
              <svg className="gradle-icon" width="16" height="16" viewBox="0 0 16 16" fill="#02303A">
                <circle cx="8" cy="8" r="6" fill="#02303A"/>
                <path d="M8 4l2 2-2 2-2-2 2-2z" fill="#fff"/>
              </svg>
              <span>Gradle Scripts</span>
            </div>
            <div className="tree-item nested">
              <span className="indent"></span>
              <svg className="file-icon" width="16" height="16" viewBox="0 0 16 16" fill="#7C4DFF">
                <path d="M3 2h7l3 3v9H3V2z"/>
              </svg>
              <span className="file-name">build.gradle.kts</span>
              <span className="file-desc">(Project: M...)</span>
            </div>
            <div className="tree-item nested">
              <span className="indent"></span>
              <svg className="file-icon" width="16" height="16" viewBox="0 0 16 16" fill="#7C4DFF">
                <path d="M3 2h7l3 3v9H3V2z"/>
              </svg>
              <span className="file-name">build.gradle.kts</span>
              <span className="file-desc">(Module: a...)</span>
            </div>
            <div className="tree-item nested">
              <span className="indent"></span>
              <svg className="file-icon" width="16" height="16" viewBox="0 0 16 16" fill="#888">
                <path d="M3 2h7l3 3v9H3V2z"/>
              </svg>
              <span className="file-name">proguard-rules.pro</span>
              <span className="file-desc">(ProGuard...)</span>
            </div>
            <div className="tree-item nested">
              <span className="indent"></span>
              <svg className="file-icon" width="16" height="16" viewBox="0 0 16 16" fill="#888">
                <circle cx="8" cy="8" r="6"/>
              </svg>
              <span className="file-name">gradle.properties</span>
              <span className="file-desc">(Project P...)</span>
            </div>
            <div className="tree-item nested">
              <span className="indent"></span>
              <svg className="file-icon" width="16" height="16" viewBox="0 0 16 16" fill="#888">
                <circle cx="8" cy="8" r="6"/>
              </svg>
              <span className="file-name">gradle-wrapper.properties</span>
            </div>
            <div className="tree-item nested">
              <span className="indent"></span>
              <svg className="file-icon" width="16" height="16" viewBox="0 0 16 16" fill="#5C6BC0">
                <rect x="3" y="2" width="10" height="12" rx="1"/>
              </svg>
              <span className="file-name">libs.versions.toml</span>
              <span className="file-desc">(Version C...)</span>
            </div>
            <div className="tree-item nested">
              <span className="indent"></span>
              <svg className="file-icon" width="16" height="16" viewBox="0 0 16 16" fill="#888">
                <circle cx="8" cy="8" r="6"/>
              </svg>
              <span className="file-name">local.properties</span>
              <span className="file-desc">(SDK Loc...)</span>
            </div>
            <div className="tree-item nested">
              <span className="indent"></span>
              <svg className="file-icon" width="16" height="16" viewBox="0 0 16 16" fill="#7C4DFF">
                <path d="M3 2h7l3 3v9H3V2z"/>
              </svg>
              <span className="file-name">settings.gradle.kts</span>
              <span className="file-desc">(Project S...)</span>
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="editor-area">
          {/* Tab Bar */}
          <div className="tab-bar">
            <div className="tab">
              <svg className="tab-icon" width="16" height="16" viewBox="0 0 16 16" fill="#9C27B0">
                <path d="M3 2h7l3 3v9H3V2z"/>
                <text x="5" y="11" fontSize="8" fill="#fff">&lt;/&gt;</text>
              </svg>
              <span>activity_main.xml</span>
              <span className="tab-close">✕</span>
            </div>
            <div className="tab active">
              <svg className="tab-icon" width="16" height="16" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="7" fill="#5C6BC0"/>
                <text x="5" y="11" fontSize="8" fill="#fff" fontWeight="bold">J</text>
              </svg>
              <span>MainActivity.java</span>
              <span className="tab-close">✕</span>
            </div>
          </div>

          {/* Code Editor */}
          <div className="code-editor">
            <div className="code-gutter">
              <div className="line-number">1</div>
              <div className="line-number">2</div>
              <div className="line-number">3</div>
              <div className="line-number">4</div>
              <div className="line-number">5</div>
              <div className="line-number">6</div>
              <div className="line-number">7</div>
              <div className="line-number">8</div>
              <div className="line-number">9</div>
              <div className="line-number">10</div>
              <div className="line-number">11</div>
              <div className="line-number">12</div>
              <div className="line-number">13</div>
              <div className="line-number">14</div>
              <div className="line-number">15</div>
              <div className="line-number">16</div>
              <div className="line-number">17</div>
              <div className="line-number">18</div>
              <div className="line-number">19</div>
              <div className="line-number">20</div>
              <div className="line-number">21</div>
              <div className="line-number">22</div>
              <div className="line-number">23</div>
              <div className="line-number">24</div>
            </div>
            <div className="code-content">
              <div className="code-line"><span className="keyword">package</span> com.example.myapplication;</div>
              <div className="code-line"></div>
              <div className="code-line"><span className="keyword">import</span> ...;</div>
              <div className="code-line"></div>
              <div className="code-line"><span className="keyword">public class</span> <span className="class-name">MainActivity</span> <span className="keyword">extends</span> <span className="class-name">AppCompatActivity</span> {'{'}</div>
              <div className="code-line"></div>
              <div className="code-line indent1"><span className="annotation">@Override</span></div>
              <div className="code-line indent1"><span className="keyword">protected void</span> <span className="method">onCreate</span>(<span className="class-name">Bundle</span> savedInstanceState) {'{'}</div>
              <div className="code-line indent2"><span className="keyword">super</span>.onCreate(savedInstanceState);</div>
              <div className="code-line indent2"><span className="class-name">EdgeToEdge</span>.enable(<span className="keyword">this</span>);</div>
              <div className="code-line indent2">setContentView(<span className="class-name">R</span>.layout.activity_main);</div>
              <div className="code-line indent2"><span className="class-name">ViewCompat</span>.setOnApplyWindowInsetsListener(findViewById(<span className="class-name">R</span>.id.main), (<span className="class-name">View</span> v, <span className="class-name">WindowInsetsCompat</span> insets) -&gt; {'{'}</div>
              <div className="code-line indent3"><span className="class-name">Insets</span> systemBars = insets.getInsets(<span className="class-name">WindowInsetsCompat</span>.<span className="class-name">Type</span>.systemBars());</div>
              <div className="code-line indent3">v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);</div>
              <div className="code-line indent3"><span className="keyword">return</span> insets;</div>
              <div className="code-line indent2">{'}'});</div>
              <div className="code-line indent1">{'}'}</div>
              <div className="code-line">{'}'}</div>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="breadcrumb">
            <span>MyApplication/G</span>
            <span className="sep">›</span>
            <span>app</span>
            <span className="sep">›</span>
            <span>src</span>
            <span className="sep">›</span>
            <span>main</span>
            <span className="sep">›</span>
            <span>java</span>
            <span className="sep">›</span>
            <span>com</span>
            <span className="sep">›</span>
            <span>example</span>
            <span className="sep">›</span>
            <span>myapplication</span>
            <span className="sep">›</span>
            <span className="current">MainActivity</span>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          <div className="sidebar-header">
            <span>Gradle</span>
          </div>
          <div className="gradle-tree">
            <div className="gradle-item expanded">
              <span className="arrow">▼</span>
              <span className="gradle-icon">🐘</span>
              <span>My Application</span>
            </div>
            <div className="gradle-item nested expanded">
              <span className="arrow">▼</span>
              <span className="folder-icon">📁</span>
              <span>Tasks</span>
            </div>
            <div className="gradle-item nested-2 expanded">
              <span className="arrow">▼</span>
              <span className="folder-icon">📁</span>
              <span>app</span>
            </div>
          </div>
          <div className="sidebar-icons-right">
            <div className="icon-item">📋</div>
            <div className="icon-item">📋</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
