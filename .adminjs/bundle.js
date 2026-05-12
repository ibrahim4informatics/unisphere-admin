(function (React, designSystem, adminjs) {
    'use strict';

    function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

    var React__default = /*#__PURE__*/_interopDefault(React);

    const CustomLogin = props => {
      const {
        action
      } = props;
      const [showPassword, setShowPassword] = React.useState(false);
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: styles$4.wrapper
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: styles$4.card
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: styles$4.logoContainer
      }, /*#__PURE__*/React__default.default.createElement("img", {
        src: props.branding?.logo || '/public/unisphere-logo.png',
        alt: "Platform Logo",
        style: styles$4.logo
      })), /*#__PURE__*/React__default.default.createElement("h2", {
        style: styles$4.title
      }, "Unisphere Plateform"), /*#__PURE__*/React__default.default.createElement("p", {
        style: styles$4.subtitle
      }, "Sign in to access your dashboard"), /*#__PURE__*/React__default.default.createElement("form", {
        method: "post",
        action: action,
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Email"), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
        name: "email",
        type: "email",
        required: true,
        style: styles$4.input
      }), /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
        mt: "lg"
      }, "Password"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: styles$4.passwordWrapper
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
        name: "password",
        type: showPassword ? 'text' : 'password',
        required: true,
        style: styles$4.input
      }), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: styles$4.eyeIcon,
        onClick: () => setShowPassword(!showPassword)
      }, showPassword ? /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
        icon: "EyeOff",
        size: 18
      }) : /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
        icon: "Eye",
        size: 18
      }))), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        type: "submit",
        mt: "xl",
        style: styles$4.button
      }, "Login"))));
    };
    const styles$4 = {
      wrapper: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #f0f4ff, #e6f0ff)',
        animation: 'fadeIn 0.8s ease'
      },
      card: {
        width: '420px',
        padding: '40px',
        borderRadius: '16px',
        background: '#ffffff',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      logoContainer: {
        marginBottom: '20px'
      },
      logo: {
        width: '80px',
        height: '80px',
        objectFit: 'contain'
      },
      title: {
        marginBottom: '5px',
        fontWeight: 600,
        color: '#1a237e'
      },
      subtitle: {
        marginBottom: '30px',
        fontSize: '14px',
        color: '#5c6bc0'
      },
      input: {
        width: '100%'
      },
      passwordWrapper: {
        position: 'relative',
        width: '100%'
      },
      eyeIcon: {
        position: 'absolute',
        right: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: '#5c6bc0'
      },
      button: {
        width: '100%',
        backgroundColor: '#3949ab',
        color: 'white',
        borderColor: '#3949ab'
      }
    };

    const api$2 = new adminjs.ApiClient();
    const cardShadow = '0 16px 40px rgba(15,23,42,0.08)';
    const softShadow = '0 10px 24px rgba(15,23,42,0.06)';
    const formatCount = value => new Intl.NumberFormat('en-US').format(value || 0);
    const formatPercent = (value, total) => {
      if (!total) return '0% of total';
      return `${Math.round(value / total * 100)}% of total`;
    };
    const SectionHeader = ({
      title,
      badge
    }) => (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.H2, {
      style: {
        margin: 0,
        fontSize: 22
      }
    }, title), badge ? (/*#__PURE__*/React__default.default.createElement(designSystem.Badge, {
      style: {
        background: '#EEF2FF',
        color: '#4F46E5'
      }
    }, badge)) : null));
    const StatCard = ({
      title,
      value,
      color = '#4F46E5',
      accent
    }) => (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      style: {
        background: 'white',
        padding: 24,
        borderRadius: 18,
        boxShadow: softShadow,
        minWidth: 220,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        borderTop: `4px solid ${color}`
      }
    }, accent ? (/*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      style: {
        color: '#94A3B8',
        fontSize: 12,
        textTransform: 'uppercase'
      }
    }, accent)) : null, /*#__PURE__*/React__default.default.createElement(designSystem.H2, {
      style: {
        color,
        fontSize: 30,
        margin: 0
      }
    }, value), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      style: {
        color: '#64748B'
      }
    }, title)));
    const ClickCard = ({
      title,
      value,
      onClick,
      hint
    }) => {
      const [hovered, setHovered] = React.useState(false);
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        onClick: onClick,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        style: {
          cursor: 'pointer',
          background: 'linear-gradient(135deg,#4F46E5,#6366F1)',
          color: 'white',
          padding: 24,
          borderRadius: 18,
          minWidth: 240,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          boxShadow: '0 14px 30px rgba(79,70,229,0.25)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0px)',
          transition: 'transform 180ms ease'
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: 'rgba(255,255,255,0.8)',
          fontSize: 12
        }
      }, hint), /*#__PURE__*/React__default.default.createElement(designSystem.H2, {
        style: {
          fontSize: 30,
          margin: 0,
          fontWeight: 700
        }
      }, value), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: 'rgba(255,255,255,0.95)'
        }
      }, title));
    };
    const StatGrid = ({
      children
    }) => (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 16
      }
    }, children));
    const PieChart = ({
      items
    }) => {
      const total = items.reduce((sum, item) => sum + item.value, 0) || 1;
      let current = 0;
      const segments = items.map(item => {
        const start = current / total * 100;
        current += item.value;
        const end = current / total * 100;
        return `${item.color} ${start}% ${end}%`;
      });
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          gap: 20,
          alignItems: 'center',
          flexWrap: 'wrap'
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          width: 160,
          height: 160,
          borderRadius: '50%',
          background: `conic-gradient(${segments.join(',')})`,
          boxShadow: softShadow
        }
      }), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 10
        }
      }, items.map(item => (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        key: item.label,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          width: 10,
          height: 10,
          borderRadius: 9999,
          background: item.color
        }
      }), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: '#475569'
        }
      }, item.label), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: '#0F172A',
          fontWeight: 600
        }
      }, item.value))))));
    };
    const BarList = ({
      items,
      accent = '#4F46E5'
    }) => {
      const max = Math.max(1, ...items.map(item => item.value));
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        }
      }, items.map(item => (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        key: item.name
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 6
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: '#475569'
        }
      }, item.name), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: '#0F172A',
          fontWeight: 600
        }
      }, item.value)), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          height: 10,
          background: '#E2E8F0',
          borderRadius: 9999,
          overflow: 'hidden'
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          width: `${item.value / max * 100}%`,
          background: accent,
          height: '100%',
          borderRadius: 9999
        }
      }))))));
    };
    const LineChart = ({
      points
    }) => {
      const max = Math.max(1, ...points.map(point => point.value));
      const width = 260;
      const height = 80;
      const padding = 8;
      const path = points.map((point, index) => {
        const x = index / Math.max(1, points.length - 1) * (width - padding * 2) + padding;
        const y = height - padding - point.value / max * (height - padding * 2);
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
      }).join(' ');
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          width: '100%'
        }
      }, /*#__PURE__*/React__default.default.createElement("svg", {
        width: "100%",
        height: height,
        viewBox: `0 0 ${width} ${height}`
      }, /*#__PURE__*/React__default.default.createElement("path", {
        d: path,
        stroke: "#4F46E5",
        strokeWidth: 3,
        fill: "none"
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: '#94A3B8',
          fontSize: 12
        }
      }, points[0]?.date), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: '#94A3B8',
          fontSize: 12
        }
      }, points[points.length - 1]?.date)));
    };
    const InsightList = ({
      title,
      items,
      valueLabel
    }) => (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      style: {
        background: 'white',
        padding: 20,
        borderRadius: 18,
        boxShadow: softShadow,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        minHeight: 220
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.H3, {
      style: {
        margin: 0,
        fontSize: 16,
        color: '#0F172A'
      }
    }, title), items.length === 0 ? (/*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      style: {
        color: '#94A3B8'
      }
    }, "No data yet")) : items.map(item => (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      key: item.id,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      style: {
        color: '#475569',
        flex: 1
      }
    }, item.label), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      style: {
        color: '#0F172A',
        fontWeight: 600
      }
    }, item.value, " ", valueLabel))))));
    const Dashboard = () => {
      const [data, setData] = React.useState(null);
      const [error, setError] = React.useState(null);
      React.useEffect(() => {
        api$2.getDashboard().then(res => setData(res.data)).catch(() => setError('Unable to load dashboard data'));
      }, []);
      const charts = React.useMemo(() => {
        if (!data) return null;
        return {
          userDistribution: data.charts.userDistribution.map((item, index) => ({
            ...item,
            color: ['#4F46E5', '#3B82F6', '#22C55E'][index] || '#6366F1'
          })),
          courseStatus: data.charts.courseStatus.map(item => ({
            ...item,
            color: {
              Draft: '#94A3B8',
              Pending: '#F59E0B',
              Accepted: '#22C55E',
              Rejected: '#EF4444'
            }[item.label] || '#6366F1'
          }))
        };
      }, [data]);
      if (error) {
        return /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
          style: {
            color: '#EF4444'
          }
        }, error);
      }
      if (!data) return /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "Loading UniSphere dashboard...");
      const insightCards = [{
        title: 'Most Active Courses',
        valueLabel: 'enrollments',
        items: data.insights.mostActiveCourses.map(course => ({
          id: course.id,
          label: course.name,
          value: course.value
        }))
      }, {
        title: 'Most Liked Posts',
        valueLabel: 'likes',
        items: data.insights.mostLikedPosts.map(post => ({
          id: post.id,
          label: post.content.slice(0, 60) + (post.content.length > 60 ? '...' : ''),
          value: post.value
        }))
      }, {
        title: 'Most Commented Posts',
        valueLabel: 'comments',
        items: data.insights.mostCommentedPosts.map(post => ({
          id: post.id,
          label: post.content.slice(0, 60) + (post.content.length > 60 ? '...' : ''),
          value: post.value
        }))
      }, {
        title: 'Top Teachers by Courses',
        valueLabel: 'courses',
        items: data.insights.topTeachers.map(teacher => ({
          id: teacher.id,
          label: teacher.name,
          value: teacher.value
        }))
      }];
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          padding: 32,
          background: '#F8FAFC',
          minHeight: '100vh'
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          padding: 30,
          background: 'linear-gradient(135deg,#4F46E5,#6366F1)',
          borderRadius: 20,
          color: 'white',
          marginBottom: 28,
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          boxShadow: cardShadow
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, {
        style: {
          margin: 0,
          fontSize: 34
        }
      }, "UniSphere Admin Dashboard"), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: 'rgba(255,255,255,0.9)',
          maxWidth: 520
        }
      }, "Snapshot of platform growth, academic performance, and engagement.")), /*#__PURE__*/React__default.default.createElement(SectionHeader, {
        title: "Global KPIs",
        badge: "University pulse"
      }), /*#__PURE__*/React__default.default.createElement(StatGrid, null, /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: formatPercent(data.kpis.users.total, data.kpis.users.total),
        title: "Total Users",
        value: data.kpis.users.total,
        color: "#4F46E5"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: formatPercent(data.kpis.users.students, data.kpis.users.total),
        title: "Students",
        value: data.kpis.users.students,
        color: "#3B82F6"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: formatPercent(data.kpis.users.teachers, data.kpis.users.total),
        title: "Teachers",
        value: data.kpis.users.teachers,
        color: "#6366F1"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: formatPercent(data.kpis.users.admins, data.kpis.users.total),
        title: "Admins",
        value: data.kpis.users.admins,
        color: "#22C55E"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: formatPercent(data.kpis.users.pending, data.kpis.users.total),
        title: "Pending Users",
        value: data.kpis.users.pending,
        color: "#F59E0B"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: formatPercent(data.kpis.users.banned, data.kpis.users.total),
        title: "Banned Users",
        value: data.kpis.users.banned,
        color: "#EF4444"
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          marginTop: 28
        }
      }, /*#__PURE__*/React__default.default.createElement(StatGrid, null, /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: formatPercent(data.kpis.courses.total, data.kpis.courses.total),
        title: "Total Courses",
        value: data.kpis.courses.total,
        color: "#4F46E5"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: formatPercent(data.kpis.courses.draft, data.kpis.courses.total),
        title: "Draft",
        value: data.kpis.courses.draft,
        color: "#94A3B8"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: formatPercent(data.kpis.courses.pending, data.kpis.courses.total),
        title: "Pending",
        value: data.kpis.courses.pending,
        color: "#F59E0B"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: formatPercent(data.kpis.courses.accepted, data.kpis.courses.total),
        title: "Accepted",
        value: data.kpis.courses.accepted,
        color: "#22C55E"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: formatPercent(data.kpis.courses.rejected, data.kpis.courses.total),
        title: "Rejected",
        value: data.kpis.courses.rejected,
        color: "#EF4444"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: formatPercent(data.kpis.posts.today, data.kpis.posts.total),
        title: "Posts Today",
        value: data.kpis.posts.today,
        color: "#3B82F6"
      }))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          marginTop: 28
        }
      }, /*#__PURE__*/React__default.default.createElement(SectionHeader, {
        title: "Smart Navigation",
        badge: "Quick actions"
      }), /*#__PURE__*/React__default.default.createElement(StatGrid, null, /*#__PURE__*/React__default.default.createElement(ClickCard, {
        title: "Review Pending Users",
        value: data.kpis.users.pending,
        hint: "Pending approvals",
        onClick: () => window.location.href = '/admin/resources/User?filters.status=PENDING'
      }), /*#__PURE__*/React__default.default.createElement(ClickCard, {
        title: "Banned Users",
        value: data.kpis.users.banned,
        hint: "Action required",
        onClick: () => window.location.href = '/admin/resources/User?filters.status=BANED'
      }), /*#__PURE__*/React__default.default.createElement(ClickCard, {
        title: "Pending Courses",
        value: data.kpis.courses.pending,
        hint: "Awaiting review",
        onClick: () => window.location.href = '/admin/resources/Course?filters.status=PENDING'
      }), /*#__PURE__*/React__default.default.createElement(ClickCard, {
        title: "Accepted Courses",
        value: data.kpis.courses.accepted,
        hint: "Published now",
        onClick: () => window.location.href = '/admin/resources/Course?filters.status=ACCEPTED'
      }))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          marginTop: 32,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 20
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          background: 'white',
          padding: 24,
          borderRadius: 18,
          boxShadow: softShadow
        }
      }, /*#__PURE__*/React__default.default.createElement(SectionHeader, {
        title: "User Distribution",
        badge: "Roles"
      }), /*#__PURE__*/React__default.default.createElement(PieChart, {
        items: charts.userDistribution
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          background: 'white',
          padding: 24,
          borderRadius: 18,
          boxShadow: softShadow
        }
      }, /*#__PURE__*/React__default.default.createElement(SectionHeader, {
        title: "Course Status",
        badge: "Pipeline"
      }), /*#__PURE__*/React__default.default.createElement(PieChart, {
        items: charts.courseStatus
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          background: 'white',
          padding: 24,
          borderRadius: 18,
          boxShadow: softShadow
        }
      }, /*#__PURE__*/React__default.default.createElement(SectionHeader, {
        title: "Courses per Faculty",
        badge: "Top 5"
      }), /*#__PURE__*/React__default.default.createElement(BarList, {
        items: data.charts.coursesPerFaculty,
        accent: "#4F46E5"
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          background: 'white',
          padding: 24,
          borderRadius: 18,
          boxShadow: softShadow
        }
      }, /*#__PURE__*/React__default.default.createElement(SectionHeader, {
        title: "User Growth",
        badge: "Last 30 days"
      }), /*#__PURE__*/React__default.default.createElement(LineChart, {
        points: data.charts.userGrowth
      }))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          marginTop: 32
        }
      }, /*#__PURE__*/React__default.default.createElement(SectionHeader, {
        title: "Admin Actions",
        badge: "Productivity"
      }), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap'
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        variant: "primary",
        onClick: () => window.location.href = '/admin/resources/User',
        style: {
          paddingLeft: 18,
          paddingRight: 18
        }
      }, "Manage Users"), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        variant: "primary",
        onClick: () => window.location.href = '/admin/resources/Course?filters.status=PENDING',
        style: {
          paddingLeft: 18,
          paddingRight: 18
        }
      }, "Review Courses"), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        variant: "primary",
        onClick: () => window.location.href = '/admin/resources/Post',
        style: {
          paddingLeft: 18,
          paddingRight: 18
        }
      }, "Moderate Posts"), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        variant: "primary",
        onClick: () => window.location.href = '/admin/resources/CourseEnrollment',
        style: {
          paddingLeft: 18,
          paddingRight: 18
        }
      }, "View Enrollments"))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          marginTop: 32
        }
      }, /*#__PURE__*/React__default.default.createElement(SectionHeader, {
        title: "Content Insights",
        badge: "Engagement"
      }), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 18
        }
      }, insightCards.map(card => (/*#__PURE__*/React__default.default.createElement(InsightList, {
        key: card.title,
        title: card.title,
        items: card.items,
        valueLabel: card.valueLabel
      }))))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          marginTop: 32
        }
      }, /*#__PURE__*/React__default.default.createElement(SectionHeader, {
        title: "Academic Reach",
        badge: "Students per faculty"
      }), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          background: 'white',
          padding: 24,
          borderRadius: 18,
          boxShadow: softShadow
        }
      }, /*#__PURE__*/React__default.default.createElement(BarList, {
        items: data.insights.studentsPerFaculty,
        accent: "#3B82F6"
      }))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          marginTop: 32
        }
      }, /*#__PURE__*/React__default.default.createElement(SectionHeader, {
        title: "Platform Health",
        badge: "System totals"
      }), /*#__PURE__*/React__default.default.createElement(StatGrid, null, /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: `Records: ${formatCount(data.system.universities)}`,
        title: "Universities",
        value: data.system.universities,
        color: "#4F46E5"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: `Records: ${formatCount(data.system.faculties)}`,
        title: "Faculties",
        value: data.system.faculties,
        color: "#6366F1"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: `Records: ${formatCount(data.system.departments)}`,
        title: "Departments",
        value: data.system.departments,
        color: "#3B82F6"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: `Records: ${formatCount(data.system.fields)}`,
        title: "Fields",
        value: data.system.fields,
        color: "#22C55E"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: `Records: ${formatCount(data.system.levels)}`,
        title: "Levels",
        value: data.system.levels,
        color: "#22C55E"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: `Profiles: ${formatCount(data.system.studentProfiles)}`,
        title: "Students",
        value: data.system.studentProfiles,
        color: "#4F46E5"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: `Profiles: ${formatCount(data.system.teacherProfiles)}`,
        title: "Teachers",
        value: data.system.teacherProfiles,
        color: "#6366F1"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: `Profiles: ${formatCount(data.system.adminProfiles)}`,
        title: "Administrators",
        value: data.system.adminProfiles,
        color: "#3B82F6"
      }), /*#__PURE__*/React__default.default.createElement(StatCard, {
        accent: `Records: ${formatCount(data.system.enrollments)}`,
        title: "Enrollments",
        value: data.system.enrollments,
        color: "#4F46E5"
      }))));
    };

    const buildAvatarUrl$3 = record => {
      const value = record?.params?.avatar_url;
      if (value) return value;
      const name = `${record?.params?.first_name || 'User'} ${record?.params?.last_name || ''}`.trim();
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4F46E5&color=fff`;
    };
    const AvatarRenderer = props => {
      const {
        record
      } = props;
      const href = `/admin/resources/User/records/${record?.id}/show`;
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          alignItems: 'center'
        }
      }, /*#__PURE__*/React__default.default.createElement("a", {
        href: href,
        style: {
          display: 'inline-flex'
        }
      }, /*#__PURE__*/React__default.default.createElement("img", {
        src: buildAvatarUrl$3(record),
        alt: "Avatar",
        style: {
          width: 36,
          height: 36,
          borderRadius: '50%',
          objectFit: 'cover'
        }
      })));
    };

    const EmailLinkRenderer = props => {
      const {
        record
      } = props;
      const href = `/admin/resources/User/records/${record?.id}/show`;
      return /*#__PURE__*/React__default.default.createElement("a", {
        href: href,
        style: {
          textDecoration: 'none'
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: '#4F46E5',
          fontWeight: 600
        }
      }, record?.params?.email));
    };

    const STATUS_COLORS = {
      CONFIRMED: {
        background: '#DCFCE7',
        color: '#15803D'
      },
      PENDING: {
        background: '#FEF3C7',
        color: '#B45309'
      },
      BANED: {
        background: '#FEE2E2',
        color: '#B91C1C'
      }
    };
    const StatusBadgeRenderer = props => {
      const {
        record
      } = props;
      const status = record?.params?.status;
      const colors = STATUS_COLORS[status] || {
        background: '#E2E8F0',
        color: '#475569'
      };
      return /*#__PURE__*/React__default.default.createElement(designSystem.Badge, {
        style: {
          background: colors.background,
          color: colors.color
        }
      }, status);
    };

    const ROLE_COLORS = {
      ADMIN: {
        background: '#E0E7FF',
        color: '#3730A3'
      },
      TEACHER: {
        background: '#DBEAFE',
        color: '#1D4ED8'
      },
      STUDENT: {
        background: '#E2E8F0',
        color: '#475569'
      }
    };
    const RoleBadgeRenderer = props => {
      const {
        record
      } = props;
      const role = record?.params?.role;
      const colors = ROLE_COLORS[role] || {
        background: '#E2E8F0',
        color: '#475569'
      };
      return /*#__PURE__*/React__default.default.createElement(designSystem.Badge, {
        style: {
          background: colors.background,
          color: colors.color
        }
      }, role);
    };

    const badgeStyle = (bg, color) => ({
      background: bg,
      color,
      textTransform: 'uppercase',
      letterSpacing: 0.4
    });
    const statusBadge = status => {
      if (status === 'CONFIRMED') return badgeStyle('#DCFCE7', '#15803D');
      if (status === 'PENDING') return badgeStyle('#FEF3C7', '#B45309');
      if (status === 'BANED') return badgeStyle('#FEE2E2', '#B91C1C');
      return badgeStyle('#E2E8F0', '#475569');
    };
    const roleBadge = role => {
      if (role === 'ADMIN') return badgeStyle('#E0E7FF', '#3730A3');
      if (role === 'TEACHER') return badgeStyle('#DBEAFE', '#1D4ED8');
      if (role === 'STUDENT') return badgeStyle('#E2E8F0', '#475569');
      return badgeStyle('#E2E8F0', '#475569');
    };
    const buildAvatarUrl$2 = record => {
      const value = record?.params?.avatar_url;
      if (value) return value;
      const name = `${record?.params?.first_name || 'User'} ${record?.params?.last_name || ''}`.trim();
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4F46E5&color=fff`;
    };
    const InfoRow = ({
      label,
      value
    }) => (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 12
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      style: {
        color: '#94A3B8',
        fontSize: 12,
        textTransform: 'uppercase'
      }
    }, label), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      style: {
        color: '#0F172A',
        fontWeight: 600
      }
    }, value || '—')));
    const SectionCard = ({
      title,
      children
    }) => (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      style: {
        background: 'white',
        borderRadius: 18,
        padding: 20,
        boxShadow: '0 12px 32px rgba(15,23,42,0.06)',
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.H3, {
      style: {
        margin: 0,
        fontSize: 16,
        color: '#0F172A'
      }
    }, title), children));
    const UserShow = props => {
      const {
        record
      } = props;
      const studentProfile = record?.params?.studentProfile;
      const teacherProfile = record?.params?.teacherProfile;
      const adminProfile = record?.params?.adminProfile;
      const idCardUrl = record?.params?.id_card_url;
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          padding: 24,
          background: '#F8FAFC',
          minHeight: '100%'
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          background: 'white',
          borderRadius: 20,
          padding: 24,
          boxShadow: '0 16px 40px rgba(15,23,42,0.08)',
          display: 'flex',
          gap: 20,
          alignItems: 'center'
        }
      }, /*#__PURE__*/React__default.default.createElement("img", {
        src: buildAvatarUrl$2(record),
        alt: "Avatar",
        style: {
          width: 84,
          height: 84,
          borderRadius: '50%',
          objectFit: 'cover'
        }
      }), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 6
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H2, {
        style: {
          margin: 0
        }
      }, record?.params?.first_name, " ", record?.params?.last_name), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: '#475569'
        }
      }, record?.params?.email), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          gap: 8
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Badge, {
        style: roleBadge(record?.params?.role)
      }, record?.params?.role), /*#__PURE__*/React__default.default.createElement(designSystem.Badge, {
        style: statusBadge(record?.params?.status)
      }, record?.params?.status)))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          marginTop: 20,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 16
        }
      }, /*#__PURE__*/React__default.default.createElement(SectionCard, {
        title: "User Info"
      }, /*#__PURE__*/React__default.default.createElement(InfoRow, {
        label: "Role",
        value: record?.params?.role
      }), /*#__PURE__*/React__default.default.createElement(InfoRow, {
        label: "Status",
        value: record?.params?.status
      }), /*#__PURE__*/React__default.default.createElement(InfoRow, {
        label: "Email",
        value: record?.params?.email
      }), /*#__PURE__*/React__default.default.createElement(InfoRow, {
        label: "First Name",
        value: record?.params?.first_name
      }), /*#__PURE__*/React__default.default.createElement(InfoRow, {
        label: "Last Name",
        value: record?.params?.last_name
      })), /*#__PURE__*/React__default.default.createElement(SectionCard, {
        title: "Student Profile"
      }, studentProfile ? (/*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, /*#__PURE__*/React__default.default.createElement(InfoRow, {
        label: "University",
        value: studentProfile.universityName
      }), /*#__PURE__*/React__default.default.createElement(InfoRow, {
        label: "Faculty",
        value: studentProfile.facultyName
      }), /*#__PURE__*/React__default.default.createElement(InfoRow, {
        label: "Department",
        value: studentProfile.departmentName
      }), /*#__PURE__*/React__default.default.createElement(InfoRow, {
        label: "Field",
        value: studentProfile.fieldName
      }), /*#__PURE__*/React__default.default.createElement(InfoRow, {
        label: "Level",
        value: studentProfile.levelName
      }))) : (/*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: '#94A3B8'
        }
      }, "No student profile"))), /*#__PURE__*/React__default.default.createElement(SectionCard, {
        title: "Teacher Profile"
      }, teacherProfile ? (/*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, /*#__PURE__*/React__default.default.createElement(InfoRow, {
        label: "University",
        value: teacherProfile.universityName
      }), /*#__PURE__*/React__default.default.createElement(InfoRow, {
        label: "Specialization",
        value: teacherProfile.specialization
      }), /*#__PURE__*/React__default.default.createElement(InfoRow, {
        label: "Academic Title",
        value: teacherProfile.academic_title
      }))) : (/*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: '#94A3B8'
        }
      }, "No teacher profile"))), /*#__PURE__*/React__default.default.createElement(SectionCard, {
        title: "Admin Profile"
      }, adminProfile ? (/*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, /*#__PURE__*/React__default.default.createElement(InfoRow, {
        label: "Admin Type",
        value: adminProfile.admin_type
      }), /*#__PURE__*/React__default.default.createElement(InfoRow, {
        label: "Permissions",
        value: adminProfile.permissions?.length ? adminProfile.permissions.join(', ') : '—'
      }))) : (/*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: '#94A3B8'
        }
      }, "No admin profile"))), /*#__PURE__*/React__default.default.createElement(SectionCard, {
        title: "ID Card"
      }, idCardUrl ? (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid #E2E8F0',
          background: '#F8FAFC'
        }
      }, /*#__PURE__*/React__default.default.createElement("img", {
        src: idCardUrl,
        alt: "ID card",
        style: {
          width: '100%',
          height: 'auto',
          display: 'block'
        }
      }))) : (/*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: '#94A3B8'
        }
      }, "No ID card image")))));
    };

    const buildOptions = items => items.map(item => ({
      value: String(item.id),
      label: item.name
    }));
    const buildAvatarUrl$1 = record => {
      const value = record?.params?.avatar_url;
      if (value) return value;
      const name = `${record?.params?.first_name || 'User'} ${record?.params?.last_name || ''}`.trim();
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4F46E5&color=fff`;
    };
    const api$1 = new adminjs.ApiClient();
    const sectionStyle = {
      background: 'white',
      padding: 20,
      borderRadius: 18,
      boxShadow: '0 12px 32px rgba(15,23,42,0.06)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    };
    const UserEdit = props => {
      const {
        record,
        resource
      } = props;
      const notice = adminjs.useNotice();
      const studentProfile = record?.params?.studentProfile;
      const teacherProfile = record?.params?.teacherProfile;
      const referenceData = record?.params?.referenceData || {};
      const roleOptions = buildOptions([{
        id: 'STUDENT',
        name: 'Student'
      }, {
        id: 'TEACHER',
        name: 'Teacher'
      }, {
        id: 'ADMIN',
        name: 'Admin'
      }]);
      const statusOptions = buildOptions([{
        id: 'PENDING',
        name: 'Pending'
      }, {
        id: 'CONFIRMED',
        name: 'Confirmed'
      }, {
        id: 'BANED',
        name: 'Banned'
      }]);
      const academicTitleOptions = buildOptions([{
        id: 'ASSISTANT',
        name: 'Assistant'
      }, {
        id: 'LECTURER',
        name: 'Lecturer'
      }, {
        id: 'PROFESSOR',
        name: 'Professor'
      }, {
        id: 'DOCTOR',
        name: 'Doctor'
      }, {
        id: 'RESEARCHER',
        name: 'Researcher'
      }, {
        id: 'NONE',
        name: 'None'
      }]);
      const [formState, setFormState] = React__default.default.useState({
        first_name: record?.params?.first_name || '',
        last_name: record?.params?.last_name || '',
        email: record?.params?.email || '',
        role: record?.params?.role || '',
        status: record?.params?.status || '',
        studentUniversityId: record?.params?.studentUniversityId ?? studentProfile?.universityId ?? '',
        studentFacultyId: record?.params?.studentFacultyId ?? studentProfile?.facultyId ?? '',
        studentDepartmentId: record?.params?.studentDepartmentId ?? studentProfile?.departmentId ?? '',
        studentFieldId: record?.params?.studentFieldId ?? studentProfile?.fieldId ?? '',
        studentLevelId: record?.params?.studentLevelId ?? studentProfile?.levelId ?? '',
        teacherUniversityId: record?.params?.teacherUniversityId ?? teacherProfile?.universityId ?? '',
        teacherSpecialization: record?.params?.teacherSpecialization ?? teacherProfile?.specialization ?? '',
        teacherAcademicTitle: record?.params?.teacherAcademicTitle ?? teacherProfile?.academic_title ?? ''
      });
      const [isSaving, setIsSaving] = React__default.default.useState(false);
      const handleSave = async () => {
        const recordId = record?.id || record?.params?.id;
        const resourceId = resource?.id;
        if (!recordId || !resourceId) {
          notice({
            message: 'Unable to save: missing record context.',
            type: 'error'
          });
          return;
        }
        const payload = Object.fromEntries(Object.entries(formState).map(([key, value]) => [key, value === '' ? undefined : value]));
        setIsSaving(true);
        try {
          await api$1.recordAction({
            resourceId,
            recordId,
            actionName: 'edit',
            data: payload
          });
          notice({
            message: 'User updated',
            type: 'success'
          });
        } catch (error) {
          notice({
            message: 'Failed to update user.',
            type: 'error'
          });
        } finally {
          setIsSaving(false);
        }
      };
      const universityOptions = buildOptions(referenceData.universities || []);
      const facultyOptions = buildOptions((referenceData.faculties || []).filter(faculty => String(faculty.university_id) === String(formState.studentUniversityId)));
      const departmentOptions = buildOptions((referenceData.departments || []).filter(department => String(department.faculty_id) === String(formState.studentFacultyId)));
      const fieldOptions = buildOptions((referenceData.fields || []).filter(field => String(field.department_id) === String(formState.studentDepartmentId)));
      const levelOptions = buildOptions((referenceData.levels || []).filter(level => String(level.field_id) === String(formState.studentFieldId)));
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          padding: 24
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: sectionStyle
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          gap: 16,
          alignItems: 'center'
        }
      }, /*#__PURE__*/React__default.default.createElement("img", {
        src: buildAvatarUrl$1(record),
        alt: "Avatar",
        style: {
          width: 64,
          height: 64,
          borderRadius: '50%',
          objectFit: 'cover'
        }
      }), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.H2, {
        style: {
          margin: 0
        }
      }, record?.params?.first_name, " ", record?.params?.last_name), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: '#64748B'
        }
      }, record?.params?.email), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          gap: 8,
          marginTop: 6
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Badge, null, record?.params?.role), /*#__PURE__*/React__default.default.createElement(designSystem.Badge, null, record?.params?.status))))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: sectionStyle
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H2, {
        style: {
          margin: 0
        }
      }, "User Details"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 12
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "First name"), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
        value: formState.first_name,
        onChange: event => setFormState(prev => ({
          ...prev,
          first_name: event.target.value
        }))
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Last name"), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
        value: formState.last_name,
        onChange: event => setFormState(prev => ({
          ...prev,
          last_name: event.target.value
        }))
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Email"), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
        value: formState.email,
        onChange: event => setFormState(prev => ({
          ...prev,
          email: event.target.value
        }))
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Role"), /*#__PURE__*/React__default.default.createElement(designSystem.Select, {
        value: roleOptions.find(option => option.value === formState.role),
        options: roleOptions,
        onChange: selected => setFormState(prev => ({
          ...prev,
          role: selected?.value || ''
        }))
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Status"), /*#__PURE__*/React__default.default.createElement(designSystem.Select, {
        value: statusOptions.find(option => option.value === formState.status),
        options: statusOptions,
        onChange: selected => setFormState(prev => ({
          ...prev,
          status: selected?.value || ''
        }))
      })))), studentProfile ? (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: sectionStyle
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H2, {
        style: {
          margin: 0
        }
      }, "Student Academic Info"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 12
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "University"), /*#__PURE__*/React__default.default.createElement(designSystem.Select, {
        value: universityOptions.find(option => option.value === String(formState.studentUniversityId)),
        options: universityOptions,
        onChange: selected => setFormState(prev => ({
          ...prev,
          studentUniversityId: selected?.value || '',
          studentFacultyId: '',
          studentDepartmentId: '',
          studentFieldId: '',
          studentLevelId: ''
        }))
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Faculty"), /*#__PURE__*/React__default.default.createElement(designSystem.Select, {
        value: facultyOptions.find(option => option.value === String(formState.studentFacultyId)),
        options: facultyOptions,
        onChange: selected => setFormState(prev => ({
          ...prev,
          studentFacultyId: selected?.value || '',
          studentDepartmentId: '',
          studentFieldId: '',
          studentLevelId: ''
        }))
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Department"), /*#__PURE__*/React__default.default.createElement(designSystem.Select, {
        value: departmentOptions.find(option => option.value === String(formState.studentDepartmentId)),
        options: departmentOptions,
        onChange: selected => setFormState(prev => ({
          ...prev,
          studentDepartmentId: selected?.value || '',
          studentFieldId: '',
          studentLevelId: ''
        }))
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Field"), /*#__PURE__*/React__default.default.createElement(designSystem.Select, {
        value: fieldOptions.find(option => option.value === String(formState.studentFieldId)),
        options: fieldOptions,
        onChange: selected => setFormState(prev => ({
          ...prev,
          studentFieldId: selected?.value || '',
          studentLevelId: ''
        }))
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Level"), /*#__PURE__*/React__default.default.createElement(designSystem.Select, {
        value: levelOptions.find(option => option.value === String(formState.studentLevelId)),
        options: levelOptions,
        onChange: selected => setFormState(prev => ({
          ...prev,
          studentLevelId: selected?.value || ''
        }))
      }))), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: '#94A3B8'
        }
      }, "Select the academic units for this student."))) : null, teacherProfile ? (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: sectionStyle
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H2, {
        style: {
          margin: 0
        }
      }, "Teacher Profile"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 12
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "University"), /*#__PURE__*/React__default.default.createElement(designSystem.Select, {
        value: universityOptions.find(option => option.value === String(formState.teacherUniversityId)),
        options: universityOptions,
        onChange: selected => setFormState(prev => ({
          ...prev,
          teacherUniversityId: selected?.value || ''
        }))
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Specialization"), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
        value: formState.teacherSpecialization,
        onChange: event => setFormState(prev => ({
          ...prev,
          teacherSpecialization: event.target.value
        }))
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Academic title"), /*#__PURE__*/React__default.default.createElement(designSystem.Select, {
        value: academicTitleOptions.find(option => option.value === String(formState.teacherAcademicTitle)),
        options: academicTitleOptions,
        onChange: selected => setFormState(prev => ({
          ...prev,
          teacherAcademicTitle: selected?.value || ''
        }))
      }))))) : null, !studentProfile && !teacherProfile ? (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: sectionStyle
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          color: '#94A3B8'
        }
      }, "This user does not have student or teacher profile data yet."))) : null, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'flex',
          justifyContent: 'flex-end'
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        variant: "primary",
        onClick: handleSave,
        disabled: isSaving
      }, isSaving ? 'Saving...' : 'Save changes')));
    };

    const api = new adminjs.ApiClient();
    const ConfirmUserAction = props => {
      const notice = adminjs.useNotice();
      const {
        record
      } = props;
      React.useEffect(() => {
        const confirmUser = async () => {
          const response = await api.recordAction({
            resourceId: 'User',
            recordId: record.id,
            actionName: 'confirm'
          });
          if (response.data.notice) {
            notice(response.data.notice);
          }
          window.location.href = '/admin/resources/User';
        };
        confirmUser();
      }, []);
      return null;
    };

    const buildAvatarUrl = record => {
      const value = record?.avatar_url;
      if (value) return value;
      const name = `${record?.first_name || 'User'} ${record?.last_name || ''}`.trim();
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4F46E5&color=fff`;
    };
    const card$1 = {
      background: '#fff',
      padding: 16,
      borderRadius: 10,
      border: '1px solid #e6edf3',
      marginBottom: 16
    };
    const flexWrap = {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    };
    const half = {
      flex: 1,
      minWidth: 320
    };
    const avatar = {
      width: 34,
      height: 34,
      borderRadius: '50%',
      objectFit: 'cover',
      marginRight: 10
    };
    const row = {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 8,
      paddingTop: 4,
      paddingBottom: 4
    };
    const CourseShow = props => {
      const course = props.record?.params?.full;
      if (!course) return /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "Loading...");
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: card$1
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, null, course.name), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Code:"), " ", course.code), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Status:"), " ", course.status), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Module:"), " ", course.module?.name), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Faculty:"), " ", course.faculty?.name), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Field:"), " ", course.field?.name)), /*#__PURE__*/React__default.default.createElement(CourseSections, {
        sections: course.courseSections
      }), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: flexWrap
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          ...card$1,
          ...half
        }
      }, /*#__PURE__*/React__default.default.createElement(CourseEnrollments, {
        enrollments: course.courseEnrollments
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          ...card$1,
          ...half
        }
      }, /*#__PURE__*/React__default.default.createElement(PublisherCard, {
        publisher: course.publisher
      }))));
    };
    const CourseSections = ({
      sections
    }) => {
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: card$1
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H2, null, "Course Sections"), sections?.length === 0 && /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "No sections"), sections?.map(s => (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        key: s.id,
        style: {
          marginTop: 12,
          borderBottom: '1px solid #eee',
          paddingBottom: 12
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, s.order, ". ", s.title)), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, s.content), s.materials?.length > 0 && (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          marginTop: 8
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Materials:")), s.materials.map(m => (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        key: m.id
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Link, {
        href: m.link,
        target: "_blank"
      }, "\u2B07 ", m.name))))))))));
    };
    const CourseEnrollments = ({
      enrollments
    }) => {
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          maxHeight: 300,
          overflowY: 'auto'
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H2, null, "Students Enrolled (", enrollments?.length || 0, ")"), enrollments?.map(e => (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        key: e.id,
        style: row
      }, /*#__PURE__*/React__default.default.createElement("img", {
        src: buildAvatarUrl(e.student?.user),
        style: avatar
      }), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        style: {
          fontWeight: 'bold'
        }
      }, e.student?.user?.first_name, " ", e.student?.user?.last_name)))));
    };
    const PublisherCard = ({
      publisher
    }) => {
      if (!publisher) return /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "No publisher");
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.H2, null, "Publisher"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: row
      }, /*#__PURE__*/React__default.default.createElement("img", {
        src: buildAvatarUrl(publisher.user),
        style: avatar
      }), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, publisher.user?.first_name, " ", publisher.user?.last_name)))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          marginTop: 12
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "University:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, publisher.university?.name || '—')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          marginTop: 8
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Email:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, publisher.user?.email || '—')));
    };

    const card = {
      background: '#fff',
      padding: 16,
      borderRadius: 10,
      border: '1px solid #e6edf3',
      marginBottom: 16
    };
    function PostShow({
      record
    }) {
      const post = record?.params?.full;
      if (!post) return /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "Loading...");
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: card
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, null, "Post #", post.id), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Type:"), " ", post.type), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Author:"), ' ', /*#__PURE__*/React__default.default.createElement(designSystem.Link, {
        href: `/admin/resources/User/records/${post.author.id}/show`
      }, post.author.email)), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Created:"), " ", new Date(post.created_at).toLocaleString())), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: card
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, null, "Content"), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, post.content)), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: card
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, null, "Media (", post.postMedias.length, ")"), post.postMedias.length === 0 && /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "No media"), post.postMedias.map(m => (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        key: m.id,
        style: {
          marginBottom: 10
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, m.type), m.type.startsWith('IMAGE') && (/*#__PURE__*/React__default.default.createElement("img", {
        src: m.url,
        style: {
          maxWidth: 200,
          borderRadius: 8
        }
      })), m.type.startsWith('VIDEO') && (/*#__PURE__*/React__default.default.createElement("video", {
        src: m.url,
        controls: true,
        style: {
          maxWidth: 300
        }
      })))))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: card
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, null, "Likes (", post.likes.length, ")"), post.likes.map(l => (/*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        key: l.id
      }, "\u2764\uFE0F ", l.user.email)))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: card
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, null, "Comments (", post.comments.length, ")"), post.comments.map(c => (/*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        key: c.id,
        style: {
          marginBottom: 10
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, c.author.email, ":"), " ", c.content))))));
    }

    const styles$3 = {
      card: {
        background: '#fff',
        borderRadius: 8,
        padding: 16,
        border: '1px solid #e6edf3',
        marginTop: 20
      },
      table: {
        width: '100%',
        borderCollapse: 'collapse'
      },
      th: {
        padding: 10,
        borderBottom: '1px solid #eef2f7',
        textAlign: 'left',
        background: '#f7fafc'
      },
      td: {
        padding: 10,
        borderBottom: '1px solid #eef2f7',
        textAlign: 'left'
      }};
    function UniversityShowChildren({
      record
    }) {
      const [faculties, setFaculties] = React.useState([]);
      const [loading, setLoading] = React.useState(true);
      const universityId = record?.params?.id;
      React.useEffect(() => {
        if (!universityId) {
          setLoading(false);
          return;
        }
        (async () => {
          try {
            const res = await fetch(`/api/hierarchy/university/${universityId}/faculties`);
            const data = await res.json();
            setFaculties(data || []);
          } catch {
            setFaculties([]);
          } finally {
            setLoading(false);
          }
        })();
      }, [universityId]);
      if (loading) return /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "Loading faculties...");
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: styles$3.card
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, null, "General Informations"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 12,
          marginTop: 12
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Name:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.name || '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Short Name:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.short_name || '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Email:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.email || '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Phone:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.phone || '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "City:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.city || '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Website:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.website ? (/*#__PURE__*/React__default.default.createElement("a", {
        href: record.params.website,
        target: "_blank",
        rel: "noreferrer"
      }, record.params.website)) : '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Created At:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.created_at ? new Date(record.params.created_at).toLocaleString() : '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Updated At:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.updated_at ? new Date(record.params.updated_at).toLocaleString() : '-')))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: styles$3.card
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, null, "Faculties (", faculties.length, ")"), faculties.length === 0 && /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "No faculties found."), faculties.length > 0 && (/*#__PURE__*/React__default.default.createElement(designSystem.Table, {
        style: styles$3.table
      }, /*#__PURE__*/React__default.default.createElement("thead", null, /*#__PURE__*/React__default.default.createElement("tr", null, /*#__PURE__*/React__default.default.createElement("th", {
        style: styles$3.th
      }, "Name"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles$3.th
      }, "Code"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles$3.th
      }, "Departments"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles$3.th
      }, "Created"))), /*#__PURE__*/React__default.default.createElement("tbody", null, faculties.map(f => {
        return /*#__PURE__*/React__default.default.createElement("tr", {
          key: f.id
        }, /*#__PURE__*/React__default.default.createElement("td", {
          style: styles$3.td
        }, /*#__PURE__*/React__default.default.createElement("strong", null, f.name)), /*#__PURE__*/React__default.default.createElement("td", {
          style: styles$3.td
        }, f.code || '-'), /*#__PURE__*/React__default.default.createElement("td", {
          style: styles$3.td
        }, f._count?.departments ?? 0), /*#__PURE__*/React__default.default.createElement("td", {
          style: styles$3.td
        }, f.created_at ? new Date(f.created_at).toLocaleDateString() : '-'));
      })))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        mt: "lg"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        as: "a",
        href: `http://localhost:5050/admin/resources/Faculty?page=1&filters.university=${record?.id}`
      }, "Manage Faculties"))));
    }

    const styles$2 = {
      card: {
        background: '#fff',
        borderRadius: 8,
        padding: 16,
        border: '1px solid #e6edf3',
        marginTop: 20
      },
      table: {
        width: '100%',
        borderCollapse: 'collapse'
      },
      th: {
        padding: 10,
        borderBottom: '1px solid #eef2f7',
        textAlign: 'left',
        background: '#f7fafc'
      },
      td: {
        padding: 10,
        borderBottom: '1px solid #eef2f7',
        textAlign: 'left'
      }};
    function FacultyShowChildren({
      record
    }) {
      const [departments, setDepartments] = React.useState([]);
      const [loading, setLoading] = React.useState(true);
      const facultyId = record?.params?.id;
      React.useEffect(() => {
        if (!facultyId) {
          setLoading(false);
          return;
        }
        (async () => {
          try {
            const res = await fetch(`/api/hierarchy/faculty/${facultyId}/departments`);
            const data = await res.json();
            setDepartments(data || []);
          } catch {
            setDepartments([]);
          } finally {
            setLoading(false);
          }
        })();
      }, [facultyId]);
      if (loading) return /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "Loading departments...");
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: styles$2.card
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, null, "General Informations"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 12,
          marginTop: 12
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Name:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.name || '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Code:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.code || '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "University:")), /*#__PURE__*/React__default.default.createElement(designSystem.Link, {
        href: `/admin/resources/University/records/${record?.params?.university.id}/show`
      }, record?.params?.university.name || '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Created At:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.created_at ? new Date(record.params.created_at).toLocaleString() : '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Updated At:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.updated_at ? new Date(record.params.updated_at).toLocaleString() : '-')))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: styles$2.card
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, null, "Departments (", departments.length, ")"), departments.length === 0 && /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "No departments found."), departments.length > 0 && (/*#__PURE__*/React__default.default.createElement("table", {
        style: styles$2.table
      }, /*#__PURE__*/React__default.default.createElement("thead", null, /*#__PURE__*/React__default.default.createElement("tr", null, /*#__PURE__*/React__default.default.createElement("th", {
        style: styles$2.th
      }, "Name"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles$2.th
      }, "Code"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles$2.th
      }, "Fields"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles$2.th
      }, "Created"))), /*#__PURE__*/React__default.default.createElement("tbody", null, departments.map(d => {
        return /*#__PURE__*/React__default.default.createElement("tr", {
          key: d.id
        }, /*#__PURE__*/React__default.default.createElement("td", {
          style: styles$2.td
        }, /*#__PURE__*/React__default.default.createElement("strong", null, d.name)), /*#__PURE__*/React__default.default.createElement("td", {
          style: styles$2.td
        }, d.code || '-'), /*#__PURE__*/React__default.default.createElement("td", {
          style: styles$2.td
        }, d._count?.fields ?? 0), /*#__PURE__*/React__default.default.createElement("td", {
          style: styles$2.td
        }, d.created_at ? new Date(d.created_at).toLocaleDateString() : '-'));
      })))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        mt: "lg"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        as: "a",
        href: `/admin/resources/Department?page=1&filters.faculty=${record?.params?.id}`
      }, "Manage Departments"))));
    }

    const styles$1 = {
      card: {
        background: '#fff',
        borderRadius: 8,
        padding: 16,
        border: '1px solid #e6edf3',
        marginTop: 20
      },
      table: {
        width: '100%',
        borderCollapse: 'collapse'
      },
      th: {
        padding: 10,
        borderBottom: '1px solid #eef2f7',
        textAlign: 'left',
        background: '#f7fafc'
      },
      td: {
        padding: 10,
        borderBottom: '1px solid #eef2f7',
        textAlign: 'left'
      }};
    function DepartmentShowChildren({
      record
    }) {
      const [fields, setFields] = React.useState([]);
      const [loading, setLoading] = React.useState(true);
      const departmentId = record?.params?.id;
      React.useEffect(() => {
        if (!departmentId) {
          setLoading(false);
          return;
        }
        (async () => {
          try {
            const res = await fetch(`/api/hierarchy/department/${departmentId}/fields`);
            const data = await res.json();
            setFields(data || []);
          } catch {
            setFields([]);
          } finally {
            setLoading(false);
          }
        })();
      }, [departmentId]);
      if (loading) return /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "Loading fields...");
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: styles$1.card
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, null, "General Informations"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 12,
          marginTop: 12
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Name:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.name || '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Code:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.code || '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "University:")), /*#__PURE__*/React__default.default.createElement(designSystem.Link, {
        href: `/admin/resources/University/records/${record?.params?.university.id}/show`
      }, record?.params?.university.name || '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Faculty:")), /*#__PURE__*/React__default.default.createElement(designSystem.Link, {
        href: `/admin/resources/Faculty/records/${record?.params?.faculty.id}/show`
      }, record?.params?.faculty.name || '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Created At:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.created_at ? new Date(record.params.created_at).toLocaleString() : '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Updated At:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.updated_at ? new Date(record.params.updated_at).toLocaleString() : '-')))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: styles$1.card
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, {
        variant: "h4"
      }, "Fields (", fields.length, ")"), fields.length === 0 && /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "No fields found."), fields.length > 0 && (/*#__PURE__*/React__default.default.createElement("table", {
        style: styles$1.table
      }, /*#__PURE__*/React__default.default.createElement("thead", null, /*#__PURE__*/React__default.default.createElement("tr", null, /*#__PURE__*/React__default.default.createElement("th", {
        style: styles$1.th
      }, "Name"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles$1.th
      }, "Code"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles$1.th
      }, "System"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles$1.th
      }, "Levels"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles$1.th
      }, "Created"))), /*#__PURE__*/React__default.default.createElement("tbody", null, fields.map(f => {
        return /*#__PURE__*/React__default.default.createElement("tr", {
          key: f.id
        }, /*#__PURE__*/React__default.default.createElement("td", {
          style: styles$1.td
        }, /*#__PURE__*/React__default.default.createElement("strong", null, f.name)), /*#__PURE__*/React__default.default.createElement("td", {
          style: styles$1.td
        }, f.code || '-'), /*#__PURE__*/React__default.default.createElement("td", {
          style: styles$1.td
        }, f.academic_system || '-'), /*#__PURE__*/React__default.default.createElement("td", {
          style: styles$1.td
        }, f._count?.levels ?? 0), /*#__PURE__*/React__default.default.createElement("td", {
          style: styles$1.td
        }, f.created_at ? new Date(f.created_at).toLocaleDateString() : '-'));
      })))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        mt: "lg"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        as: "a",
        href: `/admin/resources/Field?page=1&filters.department=${record?.params?.id}`
      }, "Manage Fields"))));
    }

    const styles = {
      card: {
        background: '#fff',
        borderRadius: 8,
        padding: 16,
        border: '1px solid #e6edf3',
        marginTop: 20
      },
      table: {
        width: '100%',
        borderCollapse: 'collapse'
      },
      th: {
        padding: 10,
        borderBottom: '1px solid #eef2f7',
        textAlign: 'left',
        background: '#f7fafc'
      },
      td: {
        padding: 10,
        borderBottom: '1px solid #eef2f7',
        textAlign: 'left'
      },
      badge: {
        padding: '4px 8px',
        borderRadius: 4,
        fontWeight: 600,
        fontSize: 12,
        marginRight: 6
      }
    };
    function FieldShowChildren({
      record
    }) {
      const [levels, setLevels] = React.useState([]);
      const [loading, setLoading] = React.useState(true);
      const fieldId = record?.params?.id;
      React.useEffect(() => {
        if (!fieldId) {
          setLoading(false);
          return;
        }
        (async () => {
          try {
            const res = await fetch(`/api/hierarchy/field/${fieldId}/levels`);
            const data = await res.json();
            setLevels(data || []);
          } catch {
            setLevels([]);
          } finally {
            setLoading(false);
          }
        })();
      }, [fieldId]);
      if (loading) return /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "Loading levels...");
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: styles.card
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, null, "General Informations"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 12,
          marginTop: 12
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Name:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.name || '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Code:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.code || '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Academic System:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.academic_system || '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Department:")), /*#__PURE__*/React__default.default.createElement(designSystem.Link, {
        href: `/admin/resources/Department/records/${record?.params?.department.id}/show`
      }, record?.params?.department.name || '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Created At:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.created_at ? new Date(record.params.created_at).toLocaleString() : '-')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, /*#__PURE__*/React__default.default.createElement("strong", null, "Updated At:")), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, record?.params?.updated_at ? new Date(record.params.updated_at).toLocaleString() : '-')))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: styles.card
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, null, "Levels (", levels.length, ")"), levels.length === 0 && /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "No levels found."), levels.length > 0 && (/*#__PURE__*/React__default.default.createElement("table", {
        style: styles.table
      }, /*#__PURE__*/React__default.default.createElement("thead", null, /*#__PURE__*/React__default.default.createElement("tr", null, /*#__PURE__*/React__default.default.createElement("th", {
        style: styles.th
      }, "Name"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles.th
      }, "Cycle"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles.th
      }, "Badges"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles.th
      }, "Created"))), /*#__PURE__*/React__default.default.createElement("tbody", null, levels.map(l => {
        const active = l.isActive !== false;
        return /*#__PURE__*/React__default.default.createElement("tr", {
          key: l.id
        }, /*#__PURE__*/React__default.default.createElement("td", {
          style: styles.td
        }, /*#__PURE__*/React__default.default.createElement("strong", null, l.name)), /*#__PURE__*/React__default.default.createElement("td", {
          style: styles.td
        }, l.cycle || '-'), /*#__PURE__*/React__default.default.createElement("td", {
          style: styles.td
        }, l.is_final && (/*#__PURE__*/React__default.default.createElement("span", {
          style: {
            ...styles.badge,
            background: '#dbeafe',
            color: '#0c4a6e'
          }
        }, "Final")), /*#__PURE__*/React__default.default.createElement("span", {
          style: {
            ...styles.badge,
            background: active ? '#ecfdf5' : '#fff1f2',
            color: active ? '#065f46' : '#7f1d1d'
          }
        }, active ? 'Active' : 'Inactive')), /*#__PURE__*/React__default.default.createElement("td", {
          style: styles.td
        }, l.created_at ? new Date(l.created_at).toLocaleDateString() : '-'));
      })))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        mt: "lg"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        as: "a",
        href: `/admin/resources/Level?page=1&filters.field=${record?.params?.id}`
      }, "Manage Levels"))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        style: styles.card
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, null, "Modules (", record?.params?.modules?.length || 0, ")"), !record?.params?.modules || record.params.modules.length === 0 ? (/*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "No modules found.")) : (/*#__PURE__*/React__default.default.createElement("table", {
        style: styles.table
      }, /*#__PURE__*/React__default.default.createElement("thead", null, /*#__PURE__*/React__default.default.createElement("tr", null, /*#__PURE__*/React__default.default.createElement("th", {
        style: styles.th
      }, "Name"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles.th
      }, "Code"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles.th
      }, "Related Fields"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles.th
      }, "Related Levels"), /*#__PURE__*/React__default.default.createElement("th", {
        style: styles.th
      }, "Courses Count"))), /*#__PURE__*/React__default.default.createElement("tbody", null, record.params.modules.map(m => (/*#__PURE__*/React__default.default.createElement("tr", {
        key: m.id
      }, /*#__PURE__*/React__default.default.createElement("td", {
        style: styles.td
      }, /*#__PURE__*/React__default.default.createElement("strong", null, m.name)), /*#__PURE__*/React__default.default.createElement("td", {
        style: styles.td
      }, m.code || '-'), /*#__PURE__*/React__default.default.createElement("td", {
        style: styles.td
      }, m.fields && m.fields.length > 0 ? m.fields.map(field => (/*#__PURE__*/React__default.default.createElement(designSystem.Link, {
        key: field.id,
        href: `/admin/resources/Field/records/${field.id}/show`,
        style: {
          textDecoration: 'none'
        }
      }, /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          ...styles.badge,
          background: '#e0f2fe',
          color: '#075985',
          marginBottom: 4,
          display: 'inline-block'
        }
      }, field.name)))) : '-'), /*#__PURE__*/React__default.default.createElement("td", {
        style: styles.td
      }, m.levels && m.levels.length > 0 ? m.levels.map(level => (/*#__PURE__*/React__default.default.createElement(designSystem.Link, {
        key: level.id,
        href: `/admin/resources/Level/records/${level.id}/show`,
        style: {
          textDecoration: 'none'
        }
      }, /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          ...styles.badge,
          background: '#c1febb',
          color: '#10a42b',
          marginBottom: 4,
          display: 'inline-block'
        }
      }, level.name)))) : '-'), /*#__PURE__*/React__default.default.createElement("td", {
        style: styles.td
      }, m._count?.courses ?? 0))))))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        mt: "lg"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        as: "a",
        href: "/admin/resources/Module"
      }, "Manage Modules"))));
    }

    AdminJS.UserComponents = {};
    AdminJS.UserComponents.Login = CustomLogin;
    AdminJS.UserComponents.Dashboard = Dashboard;
    AdminJS.UserComponents.AvatarRenderer = AvatarRenderer;
    AdminJS.UserComponents.EmailLinkRenderer = EmailLinkRenderer;
    AdminJS.UserComponents.StatusBadgeRenderer = StatusBadgeRenderer;
    AdminJS.UserComponents.RoleBadgeRenderer = RoleBadgeRenderer;
    AdminJS.UserComponents.UserShow = UserShow;
    AdminJS.UserComponents.UserEdit = UserEdit;
    AdminJS.UserComponents.ConfirmUserAction = ConfirmUserAction;
    AdminJS.UserComponents.CourseShow = CourseShow;
    AdminJS.UserComponents.PostShow = PostShow;
    AdminJS.UserComponents.UniversityShowChildren = UniversityShowChildren;
    AdminJS.UserComponents.FacultyShowChildren = FacultyShowChildren;
    AdminJS.UserComponents.DepartmentShowChildren = DepartmentShowChildren;
    AdminJS.UserComponents.FieldShowChildren = FieldShowChildren;

})(React, AdminJSDesignSystem, AdminJS);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvQ3VzdG9tTG9naW4uanMiLCIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvRGFzaGJvYXJkLmpzIiwiLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL0F2YXRhclJlbmRlcmVyLmpzIiwiLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL0VtYWlsTGlua1JlbmRlcmVyLmpzIiwiLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL1N0YXR1c0JhZGdlUmVuZGVyZXIuanMiLCIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvUm9sZUJhZGdlUmVuZGVyZXIuanMiLCIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvVXNlclNob3cuanMiLCIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvVXNlckVkaXQuanMiLCIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvQ29uZmlybVVzZXJBY3Rpb24uanMiLCIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvQ291cnNlU2hvdy5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9Qb3N0U2hvdy5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9Vbml2ZXJzaXR5U2hvd0NoaWxkcmVuLmpzIiwiLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL0ZhY3VsdHlTaG93Q2hpbGRyZW4uanMiLCIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvRGVwYXJ0bWVudFNob3dDaGlsZHJlbi5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9GaWVsZFNob3dDaGlsZHJlbi5qcyIsImVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBJbnB1dCwgTGFiZWwsIEljb24gfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmNvbnN0IEN1c3RvbUxvZ2luID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhY3Rpb24gfSA9IHByb3BzO1xuICAgIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogc3R5bGVzLndyYXBwZXIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHN0eWxlcy5jYXJkIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogc3R5bGVzLmxvZ29Db250YWluZXIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBwcm9wcy5icmFuZGluZz8ubG9nbyB8fCAnL3B1YmxpYy91bmlzcGhlcmUtbG9nby5wbmcnLCBhbHQ6IFwiUGxhdGZvcm0gTG9nb1wiLCBzdHlsZTogc3R5bGVzLmxvZ28gfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgc3R5bGU6IHN0eWxlcy50aXRsZSB9LCBcIlVuaXNwaGVyZSBQbGF0ZWZvcm1cIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiBzdHlsZXMuc3VidGl0bGUgfSwgXCJTaWduIGluIHRvIGFjY2VzcyB5b3VyIGRhc2hib2FyZFwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgbWV0aG9kOiBcInBvc3RcIiwgYWN0aW9uOiBhY3Rpb24sIHN0eWxlOiB7IHdpZHRoOiAnMTAwJScgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIG51bGwsIFwiRW1haWxcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyBuYW1lOiBcImVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiwgcmVxdWlyZWQ6IHRydWUsIHN0eWxlOiBzdHlsZXMuaW5wdXQgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgeyBtdDogXCJsZ1wiIH0sIFwiUGFzc3dvcmRcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHN0eWxlcy5wYXNzd29yZFdyYXBwZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyBuYW1lOiBcInBhc3N3b3JkXCIsIHR5cGU6IHNob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCcsIHJlcXVpcmVkOiB0cnVlLCBzdHlsZTogc3R5bGVzLmlucHV0IH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogc3R5bGVzLmV5ZUljb24sIG9uQ2xpY2s6ICgpID0+IHNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKSB9LCBzaG93UGFzc3dvcmQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgaWNvbjogXCJFeWVPZmZcIiwgc2l6ZTogMTggfSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgaWNvbjogXCJFeWVcIiwgc2l6ZTogMTggfSkpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBtdDogXCJ4bFwiLCBzdHlsZTogc3R5bGVzLmJ1dHRvbiB9LCBcIkxvZ2luXCIpKSkpKTtcbn07XG5jb25zdCBzdHlsZXMgPSB7XG4gICAgd3JhcHBlcjoge1xuICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YwZjRmZiwgI2U2ZjBmZiknLFxuICAgICAgICBhbmltYXRpb246ICdmYWRlSW4gMC44cyBlYXNlJyxcbiAgICB9LFxuICAgIGNhcmQ6IHtcbiAgICAgICAgd2lkdGg6ICc0MjBweCcsXG4gICAgICAgIHBhZGRpbmc6ICc0MHB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTZweCcsXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmZmZmJyxcbiAgICAgICAgYm94U2hhZG93OiAnMCAxMHB4IDMwcHggcmdiYSgwLDAsMCwwLjA4KScsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgbG9nb0NvbnRhaW5lcjoge1xuICAgICAgICBtYXJnaW5Cb3R0b206ICcyMHB4JyxcbiAgICB9LFxuICAgIGxvZ286IHtcbiAgICAgICAgd2lkdGg6ICc4MHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnODBweCcsXG4gICAgICAgIG9iamVjdEZpdDogJ2NvbnRhaW4nLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnNXB4JyxcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICBjb2xvcjogJyMxYTIzN2UnLFxuICAgIH0sXG4gICAgc3VidGl0bGU6IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMzBweCcsXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgIGNvbG9yOiAnIzVjNmJjMCcsXG4gICAgfSxcbiAgICBpbnB1dDoge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgcGFzc3dvcmRXcmFwcGVyOiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgZXllSWNvbjoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgcmlnaHQ6ICcxMnB4JyxcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBjb2xvcjogJyM1YzZiYzAnLFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzOTQ5YWInLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6ICcjMzk0OWFiJyxcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUxvZ2luO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcGlDbGllbnQgfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCB7IEJveCwgSDEsIEgyLCBIMywgVGV4dCwgQnV0dG9uLCBCYWRnZSB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpO1xuY29uc3QgY2FyZFNoYWRvdyA9ICcwIDE2cHggNDBweCByZ2JhKDE1LDIzLDQyLDAuMDgpJztcbmNvbnN0IHNvZnRTaGFkb3cgPSAnMCAxMHB4IDI0cHggcmdiYSgxNSwyMyw0MiwwLjA2KSc7XG5jb25zdCBmb3JtYXRDb3VudCA9ICh2YWx1ZSkgPT4gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycpLmZvcm1hdCh2YWx1ZSB8fCAwKTtcbmNvbnN0IGZvcm1hdFBlcmNlbnQgPSAodmFsdWUsIHRvdGFsKSA9PiB7XG4gICAgaWYgKCF0b3RhbClcbiAgICAgICAgcmV0dXJuICcwJSBvZiB0b3RhbCc7XG4gICAgcmV0dXJuIGAke01hdGgucm91bmQoKHZhbHVlIC8gdG90YWwpICogMTAwKX0lIG9mIHRvdGFsYDtcbn07XG5jb25zdCBTZWN0aW9uSGVhZGVyID0gKHsgdGl0bGUsIGJhZGdlIH0pID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDEyLCBtYXJnaW5Cb3R0b206IDE2IH0gfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEgyLCB7IHN0eWxlOiB7IG1hcmdpbjogMCwgZm9udFNpemU6IDIyIH0gfSwgdGl0bGUpLFxuICAgIGJhZGdlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmFkZ2UsIHsgc3R5bGU6IHsgYmFja2dyb3VuZDogJyNFRUYyRkYnLCBjb2xvcjogJyM0RjQ2RTUnIH0gfSwgYmFkZ2UpKSA6IG51bGwpKTtcbmNvbnN0IFN0YXRDYXJkID0gKHsgdGl0bGUsIHZhbHVlLCBjb2xvciA9ICcjNEY0NkU1JywgYWNjZW50IH0pID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZToge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICBwYWRkaW5nOiAyNCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxOCxcbiAgICAgICAgYm94U2hhZG93OiBzb2Z0U2hhZG93LFxuICAgICAgICBtaW5XaWR0aDogMjIwLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBnYXA6IDgsXG4gICAgICAgIGJvcmRlclRvcDogYDRweCBzb2xpZCAke2NvbG9yfWAsXG4gICAgfSB9LFxuICAgIGFjY2VudCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgc3R5bGU6IHsgY29sb3I6ICcjOTRBM0I4JywgZm9udFNpemU6IDEyLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyB9IH0sIGFjY2VudCkpIDogbnVsbCxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEgyLCB7IHN0eWxlOiB7IGNvbG9yLCBmb250U2l6ZTogMzAsIG1hcmdpbjogMCB9IH0sIHZhbHVlKSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgc3R5bGU6IHsgY29sb3I6ICcjNjQ3NDhCJyB9IH0sIHRpdGxlKSkpO1xuY29uc3QgQ2xpY2tDYXJkID0gKHsgdGl0bGUsIHZhbHVlLCBvbkNsaWNrLCBoaW50IH0pID0+IHtcbiAgICBjb25zdCBbaG92ZXJlZCwgc2V0SG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBvbkNsaWNrOiBvbkNsaWNrLCBvbk1vdXNlRW50ZXI6ICgpID0+IHNldEhvdmVyZWQodHJ1ZSksIG9uTW91c2VMZWF2ZTogKCkgPT4gc2V0SG92ZXJlZChmYWxzZSksIHN0eWxlOiB7XG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCM0RjQ2RTUsIzYzNjZGMSknLFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAyNCxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTgsXG4gICAgICAgICAgICBtaW5XaWR0aDogMjQwLFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICBnYXA6IDgsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwIDE0cHggMzBweCByZ2JhKDc5LDcwLDIyOSwwLjI1KScsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGhvdmVyZWQgPyAndHJhbnNsYXRlWSgtNHB4KScgOiAndHJhbnNsYXRlWSgwcHgpJyxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMTgwbXMgZWFzZScsXG4gICAgICAgIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCB7IHN0eWxlOiB7IGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjgpJywgZm9udFNpemU6IDEyIH0gfSwgaGludCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSDIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDMwLCBtYXJnaW46IDAsIGZvbnRXZWlnaHQ6IDcwMCB9IH0sIHZhbHVlKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCB7IHN0eWxlOiB7IGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjk1KScgfSB9LCB0aXRsZSkpKTtcbn07XG5jb25zdCBTdGF0R3JpZCA9ICh7IGNoaWxkcmVuIH0pID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZToge1xuICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSknLFxuICAgICAgICBnYXA6IDE2LFxuICAgIH0gfSwgY2hpbGRyZW4pKTtcbmNvbnN0IFBpZUNoYXJ0ID0gKHsgaXRlbXMgfSkgPT4ge1xuICAgIGNvbnN0IHRvdGFsID0gaXRlbXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0udmFsdWUsIDApIHx8IDE7XG4gICAgbGV0IGN1cnJlbnQgPSAwO1xuICAgIGNvbnN0IHNlZ21lbnRzID0gaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gKGN1cnJlbnQgLyB0b3RhbCkgKiAxMDA7XG4gICAgICAgIGN1cnJlbnQgKz0gaXRlbS52YWx1ZTtcbiAgICAgICAgY29uc3QgZW5kID0gKGN1cnJlbnQgLyB0b3RhbCkgKiAxMDA7XG4gICAgICAgIHJldHVybiBgJHtpdGVtLmNvbG9yfSAke3N0YXJ0fSUgJHtlbmR9JWA7XG4gICAgfSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGdhcDogMjAsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBmbGV4V3JhcDogJ3dyYXAnIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTYwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTYwLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYGNvbmljLWdyYWRpZW50KCR7c2VnbWVudHMuam9pbignLCcpfSlgLFxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogc29mdFNoYWRvdyxcbiAgICAgICAgICAgIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogMTAgfSB9LCBpdGVtcy5tYXAoKGl0ZW0pID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBrZXk6IGl0ZW0ubGFiZWwsIHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogMTAgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDk5OTksXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGl0ZW0uY29sb3IsXG4gICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgeyBzdHlsZTogeyBjb2xvcjogJyM0NzU1NjknIH0gfSwgaXRlbS5sYWJlbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgc3R5bGU6IHsgY29sb3I6ICcjMEYxNzJBJywgZm9udFdlaWdodDogNjAwIH0gfSwgaXRlbS52YWx1ZSkpKSkpKSk7XG59O1xuY29uc3QgQmFyTGlzdCA9ICh7IGl0ZW1zLCBhY2NlbnQgPSAnIzRGNDZFNScgfSkgPT4ge1xuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KDEsIC4uLml0ZW1zLm1hcCgoaXRlbSkgPT4gaXRlbS52YWx1ZSkpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAxMiB9IH0sIGl0ZW1zLm1hcCgoaXRlbSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IGtleTogaXRlbS5uYW1lIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luQm90dG9tOiA2IH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgeyBzdHlsZTogeyBjb2xvcjogJyM0NzU1NjknIH0gfSwgaXRlbS5uYW1lKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgeyBzdHlsZTogeyBjb2xvcjogJyMwRjE3MkEnLCBmb250V2VpZ2h0OiA2MDAgfSB9LCBpdGVtLnZhbHVlKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI0UyRThGMCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5LFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHsoaXRlbS52YWx1ZSAvIG1heCkgKiAxMDB9JWAsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGFjY2VudCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOTk5OSxcbiAgICAgICAgICAgICAgICB9IH0pKSkpKSkpO1xufTtcbmNvbnN0IExpbmVDaGFydCA9ICh7IHBvaW50cyB9KSA9PiB7XG4gICAgY29uc3QgbWF4ID0gTWF0aC5tYXgoMSwgLi4ucG9pbnRzLm1hcCgocG9pbnQpID0+IHBvaW50LnZhbHVlKSk7XG4gICAgY29uc3Qgd2lkdGggPSAyNjA7XG4gICAgY29uc3QgaGVpZ2h0ID0gODA7XG4gICAgY29uc3QgcGFkZGluZyA9IDg7XG4gICAgY29uc3QgcGF0aCA9IHBvaW50c1xuICAgICAgICAubWFwKChwb2ludCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IChpbmRleCAvIE1hdGgubWF4KDEsIHBvaW50cy5sZW5ndGggLSAxKSkgKiAod2lkdGggLSBwYWRkaW5nICogMikgKyBwYWRkaW5nO1xuICAgICAgICBjb25zdCB5ID0gaGVpZ2h0IC0gcGFkZGluZyAtIChwb2ludC52YWx1ZSAvIG1heCkgKiAoaGVpZ2h0IC0gcGFkZGluZyAqIDIpO1xuICAgICAgICByZXR1cm4gYCR7aW5kZXggPT09IDAgPyAnTScgOiAnTCd9ICR7eH0gJHt5fWA7XG4gICAgfSlcbiAgICAgICAgLmpvaW4oJyAnKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7IHdpZHRoOiAnMTAwJScgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHsgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IGhlaWdodCwgdmlld0JveDogYDAgMCAke3dpZHRofSAke2hlaWdodH1gIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7IGQ6IHBhdGgsIHN0cm9rZTogXCIjNEY0NkU1XCIsIHN0cm9rZVdpZHRoOiAzLCBmaWxsOiBcIm5vbmVcIiB9KSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgc3R5bGU6IHsgY29sb3I6ICcjOTRBM0I4JywgZm9udFNpemU6IDEyIH0gfSwgcG9pbnRzWzBdPy5kYXRlKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgeyBzdHlsZTogeyBjb2xvcjogJyM5NEEzQjgnLCBmb250U2l6ZTogMTIgfSB9LCBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdPy5kYXRlKSkpKTtcbn07XG5jb25zdCBJbnNpZ2h0TGlzdCA9ICh7IHRpdGxlLCBpdGVtcywgdmFsdWVMYWJlbCB9KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgcGFkZGluZzogMjAsXG4gICAgICAgIGJvcmRlclJhZGl1czogMTgsXG4gICAgICAgIGJveFNoYWRvdzogc29mdFNoYWRvdyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgZ2FwOiAxMixcbiAgICAgICAgbWluSGVpZ2h0OiAyMjAsXG4gICAgfSB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSDMsIHsgc3R5bGU6IHsgbWFyZ2luOiAwLCBmb250U2l6ZTogMTYsIGNvbG9yOiAnIzBGMTcyQScgfSB9LCB0aXRsZSksXG4gICAgaXRlbXMubGVuZ3RoID09PSAwID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgeyBzdHlsZTogeyBjb2xvcjogJyM5NEEzQjgnIH0gfSwgXCJObyBkYXRhIHlldFwiKSkgOiAoaXRlbXMubWFwKChpdGVtKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsga2V5OiBpdGVtLmlkLCBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGdhcDogMTIgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgc3R5bGU6IHsgY29sb3I6ICcjNDc1NTY5JywgZmxleDogMSB9IH0sIGl0ZW0ubGFiZWwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgc3R5bGU6IHsgY29sb3I6ICcjMEYxNzJBJywgZm9udFdlaWdodDogNjAwIH0gfSxcbiAgICAgICAgICAgIGl0ZW0udmFsdWUsXG4gICAgICAgICAgICBcIiBcIixcbiAgICAgICAgICAgIHZhbHVlTGFiZWwpKSkpKSkpO1xuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXBpXG4gICAgICAgICAgICAuZ2V0RGFzaGJvYXJkKClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHNldERhdGEocmVzLmRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHNldEVycm9yKCdVbmFibGUgdG8gbG9hZCBkYXNoYm9hcmQgZGF0YScpKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgY2hhcnRzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIGlmICghZGF0YSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlckRpc3RyaWJ1dGlvbjogZGF0YS5jaGFydHMudXNlckRpc3RyaWJ1dGlvbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgY29sb3I6IFsnIzRGNDZFNScsICcjM0I4MkY2JywgJyMyMkM1NUUnXVtpbmRleF0gfHwgJyM2MzY2RjEnLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgY291cnNlU3RhdHVzOiBkYXRhLmNoYXJ0cy5jb3Vyc2VTdGF0dXMubWFwKChpdGVtKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgRHJhZnQ6ICcjOTRBM0I4JyxcbiAgICAgICAgICAgICAgICAgICAgUGVuZGluZzogJyNGNTlFMEInLFxuICAgICAgICAgICAgICAgICAgICBBY2NlcHRlZDogJyMyMkM1NUUnLFxuICAgICAgICAgICAgICAgICAgICBSZWplY3RlZDogJyNFRjQ0NDQnLFxuICAgICAgICAgICAgICAgIH1baXRlbS5sYWJlbF0gfHwgJyM2MzY2RjEnLFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICB9O1xuICAgIH0sIFtkYXRhXSk7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgc3R5bGU6IHsgY29sb3I6ICcjRUY0NDQ0JyB9IH0sIGVycm9yKTtcbiAgICB9XG4gICAgaWYgKCFkYXRhKVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLCBcIkxvYWRpbmcgVW5pU3BoZXJlIGRhc2hib2FyZC4uLlwiKTtcbiAgICBjb25zdCBpbnNpZ2h0Q2FyZHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnTW9zdCBBY3RpdmUgQ291cnNlcycsXG4gICAgICAgICAgICB2YWx1ZUxhYmVsOiAnZW5yb2xsbWVudHMnLFxuICAgICAgICAgICAgaXRlbXM6IGRhdGEuaW5zaWdodHMubW9zdEFjdGl2ZUNvdXJzZXMubWFwKChjb3Vyc2UpID0+ICh7XG4gICAgICAgICAgICAgICAgaWQ6IGNvdXJzZS5pZCxcbiAgICAgICAgICAgICAgICBsYWJlbDogY291cnNlLm5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGNvdXJzZS52YWx1ZSxcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdNb3N0IExpa2VkIFBvc3RzJyxcbiAgICAgICAgICAgIHZhbHVlTGFiZWw6ICdsaWtlcycsXG4gICAgICAgICAgICBpdGVtczogZGF0YS5pbnNpZ2h0cy5tb3N0TGlrZWRQb3N0cy5tYXAoKHBvc3QpID0+ICh7XG4gICAgICAgICAgICAgICAgaWQ6IHBvc3QuaWQsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHBvc3QuY29udGVudC5zbGljZSgwLCA2MCkgKyAocG9zdC5jb250ZW50Lmxlbmd0aCA+IDYwID8gJy4uLicgOiAnJyksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBvc3QudmFsdWUsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnTW9zdCBDb21tZW50ZWQgUG9zdHMnLFxuICAgICAgICAgICAgdmFsdWVMYWJlbDogJ2NvbW1lbnRzJyxcbiAgICAgICAgICAgIGl0ZW1zOiBkYXRhLmluc2lnaHRzLm1vc3RDb21tZW50ZWRQb3N0cy5tYXAoKHBvc3QpID0+ICh7XG4gICAgICAgICAgICAgICAgaWQ6IHBvc3QuaWQsXG4gICAgICAgICAgICAgICAgbGFiZWw6IHBvc3QuY29udGVudC5zbGljZSgwLCA2MCkgKyAocG9zdC5jb250ZW50Lmxlbmd0aCA+IDYwID8gJy4uLicgOiAnJyksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBvc3QudmFsdWUsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnVG9wIFRlYWNoZXJzIGJ5IENvdXJzZXMnLFxuICAgICAgICAgICAgdmFsdWVMYWJlbDogJ2NvdXJzZXMnLFxuICAgICAgICAgICAgaXRlbXM6IGRhdGEuaW5zaWdodHMudG9wVGVhY2hlcnMubWFwKCh0ZWFjaGVyKSA9PiAoe1xuICAgICAgICAgICAgICAgIGlkOiB0ZWFjaGVyLmlkLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0ZWFjaGVyLm5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRlYWNoZXIudmFsdWUsXG4gICAgICAgICAgICB9KSksXG4gICAgICAgIH0sXG4gICAgXTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7IHBhZGRpbmc6IDMyLCBiYWNrZ3JvdW5kOiAnI0Y4RkFGQycsIG1pbkhlaWdodDogJzEwMHZoJyB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsIzRGNDZFNSwjNjM2NkYxKScsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDI4LFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICBnYXA6IDEwLFxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogY2FyZFNoYWRvdyxcbiAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSDEsIHsgc3R5bGU6IHsgbWFyZ2luOiAwLCBmb250U2l6ZTogMzQgfSB9LCBcIlVuaVNwaGVyZSBBZG1pbiBEYXNoYm9hcmRcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgc3R5bGU6IHsgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuOSknLCBtYXhXaWR0aDogNTIwIH0gfSwgXCJTbmFwc2hvdCBvZiBwbGF0Zm9ybSBncm93dGgsIGFjYWRlbWljIHBlcmZvcm1hbmNlLCBhbmQgZW5nYWdlbWVudC5cIikpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb25IZWFkZXIsIHsgdGl0bGU6IFwiR2xvYmFsIEtQSXNcIiwgYmFkZ2U6IFwiVW5pdmVyc2l0eSBwdWxzZVwiIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0YXRHcmlkLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdGF0Q2FyZCwgeyBhY2NlbnQ6IGZvcm1hdFBlcmNlbnQoZGF0YS5rcGlzLnVzZXJzLnRvdGFsLCBkYXRhLmtwaXMudXNlcnMudG90YWwpLCB0aXRsZTogXCJUb3RhbCBVc2Vyc1wiLCB2YWx1ZTogZGF0YS5rcGlzLnVzZXJzLnRvdGFsLCBjb2xvcjogXCIjNEY0NkU1XCIgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0YXRDYXJkLCB7IGFjY2VudDogZm9ybWF0UGVyY2VudChkYXRhLmtwaXMudXNlcnMuc3R1ZGVudHMsIGRhdGEua3Bpcy51c2Vycy50b3RhbCksIHRpdGxlOiBcIlN0dWRlbnRzXCIsIHZhbHVlOiBkYXRhLmtwaXMudXNlcnMuc3R1ZGVudHMsIGNvbG9yOiBcIiMzQjgyRjZcIiB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhdENhcmQsIHsgYWNjZW50OiBmb3JtYXRQZXJjZW50KGRhdGEua3Bpcy51c2Vycy50ZWFjaGVycywgZGF0YS5rcGlzLnVzZXJzLnRvdGFsKSwgdGl0bGU6IFwiVGVhY2hlcnNcIiwgdmFsdWU6IGRhdGEua3Bpcy51c2Vycy50ZWFjaGVycywgY29sb3I6IFwiIzYzNjZGMVwiIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdGF0Q2FyZCwgeyBhY2NlbnQ6IGZvcm1hdFBlcmNlbnQoZGF0YS5rcGlzLnVzZXJzLmFkbWlucywgZGF0YS5rcGlzLnVzZXJzLnRvdGFsKSwgdGl0bGU6IFwiQWRtaW5zXCIsIHZhbHVlOiBkYXRhLmtwaXMudXNlcnMuYWRtaW5zLCBjb2xvcjogXCIjMjJDNTVFXCIgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0YXRDYXJkLCB7IGFjY2VudDogZm9ybWF0UGVyY2VudChkYXRhLmtwaXMudXNlcnMucGVuZGluZywgZGF0YS5rcGlzLnVzZXJzLnRvdGFsKSwgdGl0bGU6IFwiUGVuZGluZyBVc2Vyc1wiLCB2YWx1ZTogZGF0YS5rcGlzLnVzZXJzLnBlbmRpbmcsIGNvbG9yOiBcIiNGNTlFMEJcIiB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhdENhcmQsIHsgYWNjZW50OiBmb3JtYXRQZXJjZW50KGRhdGEua3Bpcy51c2Vycy5iYW5uZWQsIGRhdGEua3Bpcy51c2Vycy50b3RhbCksIHRpdGxlOiBcIkJhbm5lZCBVc2Vyc1wiLCB2YWx1ZTogZGF0YS5rcGlzLnVzZXJzLmJhbm5lZCwgY29sb3I6IFwiI0VGNDQ0NFwiIH0pKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiAyOCB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0YXRHcmlkLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhdENhcmQsIHsgYWNjZW50OiBmb3JtYXRQZXJjZW50KGRhdGEua3Bpcy5jb3Vyc2VzLnRvdGFsLCBkYXRhLmtwaXMuY291cnNlcy50b3RhbCksIHRpdGxlOiBcIlRvdGFsIENvdXJzZXNcIiwgdmFsdWU6IGRhdGEua3Bpcy5jb3Vyc2VzLnRvdGFsLCBjb2xvcjogXCIjNEY0NkU1XCIgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdGF0Q2FyZCwgeyBhY2NlbnQ6IGZvcm1hdFBlcmNlbnQoZGF0YS5rcGlzLmNvdXJzZXMuZHJhZnQsIGRhdGEua3Bpcy5jb3Vyc2VzLnRvdGFsKSwgdGl0bGU6IFwiRHJhZnRcIiwgdmFsdWU6IGRhdGEua3Bpcy5jb3Vyc2VzLmRyYWZ0LCBjb2xvcjogXCIjOTRBM0I4XCIgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdGF0Q2FyZCwgeyBhY2NlbnQ6IGZvcm1hdFBlcmNlbnQoZGF0YS5rcGlzLmNvdXJzZXMucGVuZGluZywgZGF0YS5rcGlzLmNvdXJzZXMudG90YWwpLCB0aXRsZTogXCJQZW5kaW5nXCIsIHZhbHVlOiBkYXRhLmtwaXMuY291cnNlcy5wZW5kaW5nLCBjb2xvcjogXCIjRjU5RTBCXCIgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdGF0Q2FyZCwgeyBhY2NlbnQ6IGZvcm1hdFBlcmNlbnQoZGF0YS5rcGlzLmNvdXJzZXMuYWNjZXB0ZWQsIGRhdGEua3Bpcy5jb3Vyc2VzLnRvdGFsKSwgdGl0bGU6IFwiQWNjZXB0ZWRcIiwgdmFsdWU6IGRhdGEua3Bpcy5jb3Vyc2VzLmFjY2VwdGVkLCBjb2xvcjogXCIjMjJDNTVFXCIgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdGF0Q2FyZCwgeyBhY2NlbnQ6IGZvcm1hdFBlcmNlbnQoZGF0YS5rcGlzLmNvdXJzZXMucmVqZWN0ZWQsIGRhdGEua3Bpcy5jb3Vyc2VzLnRvdGFsKSwgdGl0bGU6IFwiUmVqZWN0ZWRcIiwgdmFsdWU6IGRhdGEua3Bpcy5jb3Vyc2VzLnJlamVjdGVkLCBjb2xvcjogXCIjRUY0NDQ0XCIgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdGF0Q2FyZCwgeyBhY2NlbnQ6IGZvcm1hdFBlcmNlbnQoZGF0YS5rcGlzLnBvc3RzLnRvZGF5LCBkYXRhLmtwaXMucG9zdHMudG90YWwpLCB0aXRsZTogXCJQb3N0cyBUb2RheVwiLCB2YWx1ZTogZGF0YS5rcGlzLnBvc3RzLnRvZGF5LCBjb2xvcjogXCIjM0I4MkY2XCIgfSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiAyOCB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb25IZWFkZXIsIHsgdGl0bGU6IFwiU21hcnQgTmF2aWdhdGlvblwiLCBiYWRnZTogXCJRdWljayBhY3Rpb25zXCIgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0YXRHcmlkLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xpY2tDYXJkLCB7IHRpdGxlOiBcIlJldmlldyBQZW5kaW5nIFVzZXJzXCIsIHZhbHVlOiBkYXRhLmtwaXMudXNlcnMucGVuZGluZywgaGludDogXCJQZW5kaW5nIGFwcHJvdmFsc1wiLCBvbkNsaWNrOiAoKSA9PiAod2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FkbWluL3Jlc291cmNlcy9Vc2VyP2ZpbHRlcnMuc3RhdHVzPVBFTkRJTkcnKSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENsaWNrQ2FyZCwgeyB0aXRsZTogXCJCYW5uZWQgVXNlcnNcIiwgdmFsdWU6IGRhdGEua3Bpcy51c2Vycy5iYW5uZWQsIGhpbnQ6IFwiQWN0aW9uIHJlcXVpcmVkXCIsIG9uQ2xpY2s6ICgpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYWRtaW4vcmVzb3VyY2VzL1VzZXI/ZmlsdGVycy5zdGF0dXM9QkFORUQnKSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENsaWNrQ2FyZCwgeyB0aXRsZTogXCJQZW5kaW5nIENvdXJzZXNcIiwgdmFsdWU6IGRhdGEua3Bpcy5jb3Vyc2VzLnBlbmRpbmcsIGhpbnQ6IFwiQXdhaXRpbmcgcmV2aWV3XCIsIG9uQ2xpY2s6ICgpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYWRtaW4vcmVzb3VyY2VzL0NvdXJzZT9maWx0ZXJzLnN0YXR1cz1QRU5ESU5HJykgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDbGlja0NhcmQsIHsgdGl0bGU6IFwiQWNjZXB0ZWQgQ291cnNlc1wiLCB2YWx1ZTogZGF0YS5rcGlzLmNvdXJzZXMuYWNjZXB0ZWQsIGhpbnQ6IFwiUHVibGlzaGVkIG5vd1wiLCBvbkNsaWNrOiAoKSA9PiAod2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FkbWluL3Jlc291cmNlcy9Db3Vyc2U/ZmlsdGVycy5zdGF0dXM9QUNDRVBURUQnKSB9KSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMzIsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMjBweCwgMWZyKSknLFxuICAgICAgICAgICAgICAgIGdhcDogMjAsXG4gICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogeyBiYWNrZ3JvdW5kOiAnd2hpdGUnLCBwYWRkaW5nOiAyNCwgYm9yZGVyUmFkaXVzOiAxOCwgYm94U2hhZG93OiBzb2Z0U2hhZG93IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb25IZWFkZXIsIHsgdGl0bGU6IFwiVXNlciBEaXN0cmlidXRpb25cIiwgYmFkZ2U6IFwiUm9sZXNcIiB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBpZUNoYXJ0LCB7IGl0ZW1zOiBjaGFydHMudXNlckRpc3RyaWJ1dGlvbiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogeyBiYWNrZ3JvdW5kOiAnd2hpdGUnLCBwYWRkaW5nOiAyNCwgYm9yZGVyUmFkaXVzOiAxOCwgYm94U2hhZG93OiBzb2Z0U2hhZG93IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb25IZWFkZXIsIHsgdGl0bGU6IFwiQ291cnNlIFN0YXR1c1wiLCBiYWRnZTogXCJQaXBlbGluZVwiIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGllQ2hhcnQsIHsgaXRlbXM6IGNoYXJ0cy5jb3Vyc2VTdGF0dXMgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHsgYmFja2dyb3VuZDogJ3doaXRlJywgcGFkZGluZzogMjQsIGJvcmRlclJhZGl1czogMTgsIGJveFNoYWRvdzogc29mdFNoYWRvdyB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWN0aW9uSGVhZGVyLCB7IHRpdGxlOiBcIkNvdXJzZXMgcGVyIEZhY3VsdHlcIiwgYmFkZ2U6IFwiVG9wIDVcIiB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJhckxpc3QsIHsgaXRlbXM6IGRhdGEuY2hhcnRzLmNvdXJzZXNQZXJGYWN1bHR5LCBhY2NlbnQ6IFwiIzRGNDZFNVwiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7IGJhY2tncm91bmQ6ICd3aGl0ZScsIHBhZGRpbmc6IDI0LCBib3JkZXJSYWRpdXM6IDE4LCBib3hTaGFkb3c6IHNvZnRTaGFkb3cgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VjdGlvbkhlYWRlciwgeyB0aXRsZTogXCJVc2VyIEdyb3d0aFwiLCBiYWRnZTogXCJMYXN0IDMwIGRheXNcIiB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmVDaGFydCwgeyBwb2ludHM6IGRhdGEuY2hhcnRzLnVzZXJHcm93dGggfSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiAzMiB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb25IZWFkZXIsIHsgdGl0bGU6IFwiQWRtaW4gQWN0aW9uc1wiLCBiYWRnZTogXCJQcm9kdWN0aXZpdHlcIiB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAxMiwgZmxleFdyYXA6ICd3cmFwJyB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFyaWFudDogXCJwcmltYXJ5XCIsIG9uQ2xpY2s6ICgpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYWRtaW4vcmVzb3VyY2VzL1VzZXInKSwgc3R5bGU6IHsgcGFkZGluZ0xlZnQ6IDE4LCBwYWRkaW5nUmlnaHQ6IDE4IH0gfSwgXCJNYW5hZ2UgVXNlcnNcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFyaWFudDogXCJwcmltYXJ5XCIsIG9uQ2xpY2s6ICgpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYWRtaW4vcmVzb3VyY2VzL0NvdXJzZT9maWx0ZXJzLnN0YXR1cz1QRU5ESU5HJyksIHN0eWxlOiB7IHBhZGRpbmdMZWZ0OiAxOCwgcGFkZGluZ1JpZ2h0OiAxOCB9IH0sIFwiUmV2aWV3IENvdXJzZXNcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgdmFyaWFudDogXCJwcmltYXJ5XCIsIG9uQ2xpY2s6ICgpID0+ICh3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYWRtaW4vcmVzb3VyY2VzL1Bvc3QnKSwgc3R5bGU6IHsgcGFkZGluZ0xlZnQ6IDE4LCBwYWRkaW5nUmlnaHQ6IDE4IH0gfSwgXCJNb2RlcmF0ZSBQb3N0c1wiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YXJpYW50OiBcInByaW1hcnlcIiwgb25DbGljazogKCkgPT4gKHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hZG1pbi9yZXNvdXJjZXMvQ291cnNlRW5yb2xsbWVudCcpLCBzdHlsZTogeyBwYWRkaW5nTGVmdDogMTgsIHBhZGRpbmdSaWdodDogMTggfSB9LCBcIlZpZXcgRW5yb2xsbWVudHNcIikpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiAzMiB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb25IZWFkZXIsIHsgdGl0bGU6IFwiQ29udGVudCBJbnNpZ2h0c1wiLCBiYWRnZTogXCJFbmdhZ2VtZW50XCIgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSknLFxuICAgICAgICAgICAgICAgICAgICBnYXA6IDE4LFxuICAgICAgICAgICAgICAgIH0gfSwgaW5zaWdodENhcmRzLm1hcCgoY2FyZCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5zaWdodExpc3QsIHsga2V5OiBjYXJkLnRpdGxlLCB0aXRsZTogY2FyZC50aXRsZSwgaXRlbXM6IGNhcmQuaXRlbXMsIHZhbHVlTGFiZWw6IGNhcmQudmFsdWVMYWJlbCB9KSkpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7IG1hcmdpblRvcDogMzIgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWN0aW9uSGVhZGVyLCB7IHRpdGxlOiBcIkFjYWRlbWljIFJlYWNoXCIsIGJhZGdlOiBcIlN0dWRlbnRzIHBlciBmYWN1bHR5XCIgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogeyBiYWNrZ3JvdW5kOiAnd2hpdGUnLCBwYWRkaW5nOiAyNCwgYm9yZGVyUmFkaXVzOiAxOCwgYm94U2hhZG93OiBzb2Z0U2hhZG93IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJhckxpc3QsIHsgaXRlbXM6IGRhdGEuaW5zaWdodHMuc3R1ZGVudHNQZXJGYWN1bHR5LCBhY2NlbnQ6IFwiIzNCODJGNlwiIH0pKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7IG1hcmdpblRvcDogMzIgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWN0aW9uSGVhZGVyLCB7IHRpdGxlOiBcIlBsYXRmb3JtIEhlYWx0aFwiLCBiYWRnZTogXCJTeXN0ZW0gdG90YWxzXCIgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0YXRHcmlkLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhdENhcmQsIHsgYWNjZW50OiBgUmVjb3JkczogJHtmb3JtYXRDb3VudChkYXRhLnN5c3RlbS51bml2ZXJzaXRpZXMpfWAsIHRpdGxlOiBcIlVuaXZlcnNpdGllc1wiLCB2YWx1ZTogZGF0YS5zeXN0ZW0udW5pdmVyc2l0aWVzLCBjb2xvcjogXCIjNEY0NkU1XCIgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdGF0Q2FyZCwgeyBhY2NlbnQ6IGBSZWNvcmRzOiAke2Zvcm1hdENvdW50KGRhdGEuc3lzdGVtLmZhY3VsdGllcyl9YCwgdGl0bGU6IFwiRmFjdWx0aWVzXCIsIHZhbHVlOiBkYXRhLnN5c3RlbS5mYWN1bHRpZXMsIGNvbG9yOiBcIiM2MzY2RjFcIiB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0YXRDYXJkLCB7IGFjY2VudDogYFJlY29yZHM6ICR7Zm9ybWF0Q291bnQoZGF0YS5zeXN0ZW0uZGVwYXJ0bWVudHMpfWAsIHRpdGxlOiBcIkRlcGFydG1lbnRzXCIsIHZhbHVlOiBkYXRhLnN5c3RlbS5kZXBhcnRtZW50cywgY29sb3I6IFwiIzNCODJGNlwiIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhdENhcmQsIHsgYWNjZW50OiBgUmVjb3JkczogJHtmb3JtYXRDb3VudChkYXRhLnN5c3RlbS5maWVsZHMpfWAsIHRpdGxlOiBcIkZpZWxkc1wiLCB2YWx1ZTogZGF0YS5zeXN0ZW0uZmllbGRzLCBjb2xvcjogXCIjMjJDNTVFXCIgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdGF0Q2FyZCwgeyBhY2NlbnQ6IGBSZWNvcmRzOiAke2Zvcm1hdENvdW50KGRhdGEuc3lzdGVtLmxldmVscyl9YCwgdGl0bGU6IFwiTGV2ZWxzXCIsIHZhbHVlOiBkYXRhLnN5c3RlbS5sZXZlbHMsIGNvbG9yOiBcIiMyMkM1NUVcIiB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN0YXRDYXJkLCB7IGFjY2VudDogYFByb2ZpbGVzOiAke2Zvcm1hdENvdW50KGRhdGEuc3lzdGVtLnN0dWRlbnRQcm9maWxlcyl9YCwgdGl0bGU6IFwiU3R1ZGVudHNcIiwgdmFsdWU6IGRhdGEuc3lzdGVtLnN0dWRlbnRQcm9maWxlcywgY29sb3I6IFwiIzRGNDZFNVwiIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhdENhcmQsIHsgYWNjZW50OiBgUHJvZmlsZXM6ICR7Zm9ybWF0Q291bnQoZGF0YS5zeXN0ZW0udGVhY2hlclByb2ZpbGVzKX1gLCB0aXRsZTogXCJUZWFjaGVyc1wiLCB2YWx1ZTogZGF0YS5zeXN0ZW0udGVhY2hlclByb2ZpbGVzLCBjb2xvcjogXCIjNjM2NkYxXCIgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTdGF0Q2FyZCwgeyBhY2NlbnQ6IGBQcm9maWxlczogJHtmb3JtYXRDb3VudChkYXRhLnN5c3RlbS5hZG1pblByb2ZpbGVzKX1gLCB0aXRsZTogXCJBZG1pbmlzdHJhdG9yc1wiLCB2YWx1ZTogZGF0YS5zeXN0ZW0uYWRtaW5Qcm9maWxlcywgY29sb3I6IFwiIzNCODJGNlwiIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhdENhcmQsIHsgYWNjZW50OiBgUmVjb3JkczogJHtmb3JtYXRDb3VudChkYXRhLnN5c3RlbS5lbnJvbGxtZW50cyl9YCwgdGl0bGU6IFwiRW5yb2xsbWVudHNcIiwgdmFsdWU6IGRhdGEuc3lzdGVtLmVucm9sbG1lbnRzLCBjb2xvcjogXCIjNEY0NkU1XCIgfSkpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmNvbnN0IGJ1aWxkQXZhdGFyVXJsID0gKHJlY29yZCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcmVjb3JkPy5wYXJhbXM/LmF2YXRhcl91cmw7XG4gICAgaWYgKHZhbHVlKVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgY29uc3QgbmFtZSA9IGAke3JlY29yZD8ucGFyYW1zPy5maXJzdF9uYW1lIHx8ICdVc2VyJ30gJHtyZWNvcmQ/LnBhcmFtcz8ubGFzdF9uYW1lIHx8ICcnfWAudHJpbSgpO1xuICAgIHJldHVybiBgaHR0cHM6Ly91aS1hdmF0YXJzLmNvbS9hcGkvP25hbWU9JHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9JmJhY2tncm91bmQ9NEY0NkU1JmNvbG9yPWZmZmA7XG59O1xuY29uc3QgQXZhdGFyUmVuZGVyZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHJlY29yZCB9ID0gcHJvcHM7XG4gICAgY29uc3QgaHJlZiA9IGAvYWRtaW4vcmVzb3VyY2VzL1VzZXIvcmVjb3Jkcy8ke3JlY29yZD8uaWR9L3Nob3dgO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogaHJlZiwgc3R5bGU6IHsgZGlzcGxheTogJ2lubGluZS1mbGV4JyB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBidWlsZEF2YXRhclVybChyZWNvcmQpLCBhbHQ6IFwiQXZhdGFyXCIsIHN0eWxlOiB7IHdpZHRoOiAzNiwgaGVpZ2h0OiAzNiwgYm9yZGVyUmFkaXVzOiAnNTAlJywgb2JqZWN0Rml0OiAnY292ZXInIH0gfSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQXZhdGFyUmVuZGVyZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuY29uc3QgRW1haWxMaW5rUmVuZGVyZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHJlY29yZCB9ID0gcHJvcHM7XG4gICAgY29uc3QgaHJlZiA9IGAvYWRtaW4vcmVzb3VyY2VzL1VzZXIvcmVjb3Jkcy8ke3JlY29yZD8uaWR9L3Nob3dgO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBocmVmLCBzdHlsZTogeyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCB7IHN0eWxlOiB7IGNvbG9yOiAnIzRGNDZFNScsIGZvbnRXZWlnaHQ6IDYwMCB9IH0sIHJlY29yZD8ucGFyYW1zPy5lbWFpbCkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBFbWFpbExpbmtSZW5kZXJlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuY29uc3QgU1RBVFVTX0NPTE9SUyA9IHtcbiAgICBDT05GSVJNRUQ6IHsgYmFja2dyb3VuZDogJyNEQ0ZDRTcnLCBjb2xvcjogJyMxNTgwM0QnIH0sXG4gICAgUEVORElORzogeyBiYWNrZ3JvdW5kOiAnI0ZFRjNDNycsIGNvbG9yOiAnI0I0NTMwOScgfSxcbiAgICBCQU5FRDogeyBiYWNrZ3JvdW5kOiAnI0ZFRTJFMicsIGNvbG9yOiAnI0I5MUMxQycgfSxcbn07XG5jb25zdCBTdGF0dXNCYWRnZVJlbmRlcmVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyByZWNvcmQgfSA9IHByb3BzO1xuICAgIGNvbnN0IHN0YXR1cyA9IHJlY29yZD8ucGFyYW1zPy5zdGF0dXM7XG4gICAgY29uc3QgY29sb3JzID0gU1RBVFVTX0NPTE9SU1tzdGF0dXNdIHx8IHsgYmFja2dyb3VuZDogJyNFMkU4RjAnLCBjb2xvcjogJyM0NzU1NjknIH07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmFkZ2UsIHsgc3R5bGU6IHsgYmFja2dyb3VuZDogY29sb3JzLmJhY2tncm91bmQsIGNvbG9yOiBjb2xvcnMuY29sb3IgfSB9LCBzdGF0dXMpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFN0YXR1c0JhZGdlUmVuZGVyZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmNvbnN0IFJPTEVfQ09MT1JTID0ge1xuICAgIEFETUlOOiB7IGJhY2tncm91bmQ6ICcjRTBFN0ZGJywgY29sb3I6ICcjMzczMEEzJyB9LFxuICAgIFRFQUNIRVI6IHsgYmFja2dyb3VuZDogJyNEQkVBRkUnLCBjb2xvcjogJyMxRDRFRDgnIH0sXG4gICAgU1RVREVOVDogeyBiYWNrZ3JvdW5kOiAnI0UyRThGMCcsIGNvbG9yOiAnIzQ3NTU2OScgfSxcbn07XG5jb25zdCBSb2xlQmFkZ2VSZW5kZXJlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgcmVjb3JkIH0gPSBwcm9wcztcbiAgICBjb25zdCByb2xlID0gcmVjb3JkPy5wYXJhbXM/LnJvbGU7XG4gICAgY29uc3QgY29sb3JzID0gUk9MRV9DT0xPUlNbcm9sZV0gfHwgeyBiYWNrZ3JvdW5kOiAnI0UyRThGMCcsIGNvbG9yOiAnIzQ3NTU2OScgfTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChCYWRnZSwgeyBzdHlsZTogeyBiYWNrZ3JvdW5kOiBjb2xvcnMuYmFja2dyb3VuZCwgY29sb3I6IGNvbG9ycy5jb2xvciB9IH0sIHJvbGUpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJvbGVCYWRnZVJlbmRlcmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgSDIsIEgzLCBUZXh0LCBCYWRnZSB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuY29uc3QgYmFkZ2VTdHlsZSA9IChiZywgY29sb3IpID0+ICh7XG4gICAgYmFja2dyb3VuZDogYmcsXG4gICAgY29sb3IsXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgbGV0dGVyU3BhY2luZzogMC40LFxufSk7XG5jb25zdCBzdGF0dXNCYWRnZSA9IChzdGF0dXMpID0+IHtcbiAgICBpZiAoc3RhdHVzID09PSAnQ09ORklSTUVEJylcbiAgICAgICAgcmV0dXJuIGJhZGdlU3R5bGUoJyNEQ0ZDRTcnLCAnIzE1ODAzRCcpO1xuICAgIGlmIChzdGF0dXMgPT09ICdQRU5ESU5HJylcbiAgICAgICAgcmV0dXJuIGJhZGdlU3R5bGUoJyNGRUYzQzcnLCAnI0I0NTMwOScpO1xuICAgIGlmIChzdGF0dXMgPT09ICdCQU5FRCcpXG4gICAgICAgIHJldHVybiBiYWRnZVN0eWxlKCcjRkVFMkUyJywgJyNCOTFDMUMnKTtcbiAgICByZXR1cm4gYmFkZ2VTdHlsZSgnI0UyRThGMCcsICcjNDc1NTY5Jyk7XG59O1xuY29uc3Qgcm9sZUJhZGdlID0gKHJvbGUpID0+IHtcbiAgICBpZiAocm9sZSA9PT0gJ0FETUlOJylcbiAgICAgICAgcmV0dXJuIGJhZGdlU3R5bGUoJyNFMEU3RkYnLCAnIzM3MzBBMycpO1xuICAgIGlmIChyb2xlID09PSAnVEVBQ0hFUicpXG4gICAgICAgIHJldHVybiBiYWRnZVN0eWxlKCcjREJFQUZFJywgJyMxRDRFRDgnKTtcbiAgICBpZiAocm9sZSA9PT0gJ1NUVURFTlQnKVxuICAgICAgICByZXR1cm4gYmFkZ2VTdHlsZSgnI0UyRThGMCcsICcjNDc1NTY5Jyk7XG4gICAgcmV0dXJuIGJhZGdlU3R5bGUoJyNFMkU4RjAnLCAnIzQ3NTU2OScpO1xufTtcbmNvbnN0IGJ1aWxkQXZhdGFyVXJsID0gKHJlY29yZCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcmVjb3JkPy5wYXJhbXM/LmF2YXRhcl91cmw7XG4gICAgaWYgKHZhbHVlKVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgY29uc3QgbmFtZSA9IGAke3JlY29yZD8ucGFyYW1zPy5maXJzdF9uYW1lIHx8ICdVc2VyJ30gJHtyZWNvcmQ/LnBhcmFtcz8ubGFzdF9uYW1lIHx8ICcnfWAudHJpbSgpO1xuICAgIHJldHVybiBgaHR0cHM6Ly91aS1hdmF0YXJzLmNvbS9hcGkvP25hbWU9JHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9JmJhY2tncm91bmQ9NEY0NkU1JmNvbG9yPWZmZmA7XG59O1xuY29uc3QgSW5mb1JvdyA9ICh7IGxhYmVsLCB2YWx1ZSB9KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBnYXA6IDEyIH0gfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgc3R5bGU6IHsgY29sb3I6ICcjOTRBM0I4JywgZm9udFNpemU6IDEyLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyB9IH0sIGxhYmVsKSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgc3R5bGU6IHsgY29sb3I6ICcjMEYxNzJBJywgZm9udFdlaWdodDogNjAwIH0gfSwgdmFsdWUgfHwgJ+KAlCcpKSk7XG5jb25zdCBTZWN0aW9uQ2FyZCA9ICh7IHRpdGxlLCBjaGlsZHJlbiB9KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxOCxcbiAgICAgICAgcGFkZGluZzogMjAsXG4gICAgICAgIGJveFNoYWRvdzogJzAgMTJweCAzMnB4IHJnYmEoMTUsMjMsNDIsMC4wNiknLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBnYXA6IDEyLFxuICAgIH0gfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEgzLCB7IHN0eWxlOiB7IG1hcmdpbjogMCwgZm9udFNpemU6IDE2LCBjb2xvcjogJyMwRjE3MkEnIH0gfSwgdGl0bGUpLFxuICAgIGNoaWxkcmVuKSk7XG5jb25zdCBVc2VyU2hvdyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgcmVjb3JkIH0gPSBwcm9wcztcbiAgICBjb25zdCBzdHVkZW50UHJvZmlsZSA9IHJlY29yZD8ucGFyYW1zPy5zdHVkZW50UHJvZmlsZTtcbiAgICBjb25zdCB0ZWFjaGVyUHJvZmlsZSA9IHJlY29yZD8ucGFyYW1zPy50ZWFjaGVyUHJvZmlsZTtcbiAgICBjb25zdCBhZG1pblByb2ZpbGUgPSByZWNvcmQ/LnBhcmFtcz8uYWRtaW5Qcm9maWxlO1xuICAgIGNvbnN0IGlkQ2FyZFVybCA9IHJlY29yZD8ucGFyYW1zPy5pZF9jYXJkX3VybDtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7IHBhZGRpbmc6IDI0LCBiYWNrZ3JvdW5kOiAnI0Y4RkFGQycsIG1pbkhlaWdodDogJzEwMCUnIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjQsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAxNnB4IDQwcHggcmdiYSgxNSwyMyw0MiwwLjA4KScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGdhcDogMjAsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBidWlsZEF2YXRhclVybChyZWNvcmQpLCBhbHQ6IFwiQXZhdGFyXCIsIHN0eWxlOiB7IHdpZHRoOiA4NCwgaGVpZ2h0OiA4NCwgYm9yZGVyUmFkaXVzOiAnNTAlJywgb2JqZWN0Rml0OiAnY292ZXInIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDYgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSDIsIHsgc3R5bGU6IHsgbWFyZ2luOiAwIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkPy5wYXJhbXM/LmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiLFxuICAgICAgICAgICAgICAgICAgICByZWNvcmQ/LnBhcmFtcz8ubGFzdF9uYW1lKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgc3R5bGU6IHsgY29sb3I6ICcjNDc1NTY5JyB9IH0sIHJlY29yZD8ucGFyYW1zPy5lbWFpbCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDggfSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJhZGdlLCB7IHN0eWxlOiByb2xlQmFkZ2UocmVjb3JkPy5wYXJhbXM/LnJvbGUpIH0sIHJlY29yZD8ucGFyYW1zPy5yb2xlKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCYWRnZSwgeyBzdHlsZTogc3RhdHVzQmFkZ2UocmVjb3JkPy5wYXJhbXM/LnN0YXR1cykgfSwgcmVjb3JkPy5wYXJhbXM/LnN0YXR1cykpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyMCxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI0MHB4LCAxZnIpKScsXG4gICAgICAgICAgICAgICAgZ2FwOiAxNixcbiAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VjdGlvbkNhcmQsIHsgdGl0bGU6IFwiVXNlciBJbmZvXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEluZm9Sb3csIHsgbGFiZWw6IFwiUm9sZVwiLCB2YWx1ZTogcmVjb3JkPy5wYXJhbXM/LnJvbGUgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbmZvUm93LCB7IGxhYmVsOiBcIlN0YXR1c1wiLCB2YWx1ZTogcmVjb3JkPy5wYXJhbXM/LnN0YXR1cyB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEluZm9Sb3csIHsgbGFiZWw6IFwiRW1haWxcIiwgdmFsdWU6IHJlY29yZD8ucGFyYW1zPy5lbWFpbCB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEluZm9Sb3csIHsgbGFiZWw6IFwiRmlyc3QgTmFtZVwiLCB2YWx1ZTogcmVjb3JkPy5wYXJhbXM/LmZpcnN0X25hbWUgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbmZvUm93LCB7IGxhYmVsOiBcIkxhc3QgTmFtZVwiLCB2YWx1ZTogcmVjb3JkPy5wYXJhbXM/Lmxhc3RfbmFtZSB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb25DYXJkLCB7IHRpdGxlOiBcIlN0dWRlbnQgUHJvZmlsZVwiIH0sIHN0dWRlbnRQcm9maWxlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbmZvUm93LCB7IGxhYmVsOiBcIlVuaXZlcnNpdHlcIiwgdmFsdWU6IHN0dWRlbnRQcm9maWxlLnVuaXZlcnNpdHlOYW1lIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5mb1JvdywgeyBsYWJlbDogXCJGYWN1bHR5XCIsIHZhbHVlOiBzdHVkZW50UHJvZmlsZS5mYWN1bHR5TmFtZSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEluZm9Sb3csIHsgbGFiZWw6IFwiRGVwYXJ0bWVudFwiLCB2YWx1ZTogc3R1ZGVudFByb2ZpbGUuZGVwYXJ0bWVudE5hbWUgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbmZvUm93LCB7IGxhYmVsOiBcIkZpZWxkXCIsIHZhbHVlOiBzdHVkZW50UHJvZmlsZS5maWVsZE5hbWUgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbmZvUm93LCB7IGxhYmVsOiBcIkxldmVsXCIsIHZhbHVlOiBzdHVkZW50UHJvZmlsZS5sZXZlbE5hbWUgfSkpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgc3R5bGU6IHsgY29sb3I6ICcjOTRBM0I4JyB9IH0sIFwiTm8gc3R1ZGVudCBwcm9maWxlXCIpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb25DYXJkLCB7IHRpdGxlOiBcIlRlYWNoZXIgUHJvZmlsZVwiIH0sIHRlYWNoZXJQcm9maWxlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbmZvUm93LCB7IGxhYmVsOiBcIlVuaXZlcnNpdHlcIiwgdmFsdWU6IHRlYWNoZXJQcm9maWxlLnVuaXZlcnNpdHlOYW1lIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5mb1JvdywgeyBsYWJlbDogXCJTcGVjaWFsaXphdGlvblwiLCB2YWx1ZTogdGVhY2hlclByb2ZpbGUuc3BlY2lhbGl6YXRpb24gfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbmZvUm93LCB7IGxhYmVsOiBcIkFjYWRlbWljIFRpdGxlXCIsIHZhbHVlOiB0ZWFjaGVyUHJvZmlsZS5hY2FkZW1pY190aXRsZSB9KSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgeyBzdHlsZTogeyBjb2xvcjogJyM5NEEzQjgnIH0gfSwgXCJObyB0ZWFjaGVyIHByb2ZpbGVcIikpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VjdGlvbkNhcmQsIHsgdGl0bGU6IFwiQWRtaW4gUHJvZmlsZVwiIH0sIGFkbWluUHJvZmlsZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5mb1JvdywgeyBsYWJlbDogXCJBZG1pbiBUeXBlXCIsIHZhbHVlOiBhZG1pblByb2ZpbGUuYWRtaW5fdHlwZSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEluZm9Sb3csIHsgbGFiZWw6IFwiUGVybWlzc2lvbnNcIiwgdmFsdWU6IGFkbWluUHJvZmlsZS5wZXJtaXNzaW9ucz8ubGVuZ3RoID8gYWRtaW5Qcm9maWxlLnBlcm1pc3Npb25zLmpvaW4oJywgJykgOiAn4oCUJyB9KSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgeyBzdHlsZTogeyBjb2xvcjogJyM5NEEzQjgnIH0gfSwgXCJObyBhZG1pbiBwcm9maWxlXCIpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb25DYXJkLCB7IHRpdGxlOiBcIklEIENhcmRcIiB9LCBpZENhcmRVcmwgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI0UyRThGMCcsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjRjhGQUZDJyxcbiAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogaWRDYXJkVXJsLCBhbHQ6IFwiSUQgY2FyZFwiLCBzdHlsZTogeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdhdXRvJywgZGlzcGxheTogJ2Jsb2NrJyB9IH0pKSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCB7IHN0eWxlOiB7IGNvbG9yOiAnIzk0QTNCOCcgfSB9LCBcIk5vIElEIGNhcmQgaW1hZ2VcIikpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBVc2VyU2hvdztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcGlDbGllbnQsIHVzZU5vdGljZSB9IGZyb20gJ2FkbWluanMnO1xuaW1wb3J0IHsgQm94LCBIMiwgVGV4dCwgU2VsZWN0LCBJbnB1dCwgTGFiZWwsIEJhZGdlLCBCdXR0b24gfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmNvbnN0IGJ1aWxkT3B0aW9ucyA9IChpdGVtcykgPT4gaXRlbXMubWFwKChpdGVtKSA9PiAoeyB2YWx1ZTogU3RyaW5nKGl0ZW0uaWQpLCBsYWJlbDogaXRlbS5uYW1lIH0pKTtcbmNvbnN0IGJ1aWxkQXZhdGFyVXJsID0gKHJlY29yZCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcmVjb3JkPy5wYXJhbXM/LmF2YXRhcl91cmw7XG4gICAgaWYgKHZhbHVlKVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgY29uc3QgbmFtZSA9IGAke3JlY29yZD8ucGFyYW1zPy5maXJzdF9uYW1lIHx8ICdVc2VyJ30gJHtyZWNvcmQ/LnBhcmFtcz8ubGFzdF9uYW1lIHx8ICcnfWAudHJpbSgpO1xuICAgIHJldHVybiBgaHR0cHM6Ly91aS1hdmF0YXJzLmNvbS9hcGkvP25hbWU9JHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9JmJhY2tncm91bmQ9NEY0NkU1JmNvbG9yPWZmZmA7XG59O1xuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpO1xuY29uc3Qgc2VjdGlvblN0eWxlID0ge1xuICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgcGFkZGluZzogMjAsXG4gICAgYm9yZGVyUmFkaXVzOiAxOCxcbiAgICBib3hTaGFkb3c6ICcwIDEycHggMzJweCByZ2JhKDE1LDIzLDQyLDAuMDYpJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgZ2FwOiAxMixcbn07XG5jb25zdCBVc2VyRWRpdCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgcmVjb3JkLCByZXNvdXJjZSB9ID0gcHJvcHM7XG4gICAgY29uc3Qgbm90aWNlID0gdXNlTm90aWNlKCk7XG4gICAgY29uc3Qgc3R1ZGVudFByb2ZpbGUgPSByZWNvcmQ/LnBhcmFtcz8uc3R1ZGVudFByb2ZpbGU7XG4gICAgY29uc3QgdGVhY2hlclByb2ZpbGUgPSByZWNvcmQ/LnBhcmFtcz8udGVhY2hlclByb2ZpbGU7XG4gICAgY29uc3QgcmVmZXJlbmNlRGF0YSA9IHJlY29yZD8ucGFyYW1zPy5yZWZlcmVuY2VEYXRhIHx8IHt9O1xuICAgIGNvbnN0IHJvbGVPcHRpb25zID0gYnVpbGRPcHRpb25zKFtcbiAgICAgICAgeyBpZDogJ1NUVURFTlQnLCBuYW1lOiAnU3R1ZGVudCcgfSxcbiAgICAgICAgeyBpZDogJ1RFQUNIRVInLCBuYW1lOiAnVGVhY2hlcicgfSxcbiAgICAgICAgeyBpZDogJ0FETUlOJywgbmFtZTogJ0FkbWluJyB9LFxuICAgIF0pO1xuICAgIGNvbnN0IHN0YXR1c09wdGlvbnMgPSBidWlsZE9wdGlvbnMoW1xuICAgICAgICB7IGlkOiAnUEVORElORycsIG5hbWU6ICdQZW5kaW5nJyB9LFxuICAgICAgICB7IGlkOiAnQ09ORklSTUVEJywgbmFtZTogJ0NvbmZpcm1lZCcgfSxcbiAgICAgICAgeyBpZDogJ0JBTkVEJywgbmFtZTogJ0Jhbm5lZCcgfSxcbiAgICBdKTtcbiAgICBjb25zdCBhY2FkZW1pY1RpdGxlT3B0aW9ucyA9IGJ1aWxkT3B0aW9ucyhbXG4gICAgICAgIHsgaWQ6ICdBU1NJU1RBTlQnLCBuYW1lOiAnQXNzaXN0YW50JyB9LFxuICAgICAgICB7IGlkOiAnTEVDVFVSRVInLCBuYW1lOiAnTGVjdHVyZXInIH0sXG4gICAgICAgIHsgaWQ6ICdQUk9GRVNTT1InLCBuYW1lOiAnUHJvZmVzc29yJyB9LFxuICAgICAgICB7IGlkOiAnRE9DVE9SJywgbmFtZTogJ0RvY3RvcicgfSxcbiAgICAgICAgeyBpZDogJ1JFU0VBUkNIRVInLCBuYW1lOiAnUmVzZWFyY2hlcicgfSxcbiAgICAgICAgeyBpZDogJ05PTkUnLCBuYW1lOiAnTm9uZScgfSxcbiAgICBdKTtcbiAgICBjb25zdCBbZm9ybVN0YXRlLCBzZXRGb3JtU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgICAgICBmaXJzdF9uYW1lOiByZWNvcmQ/LnBhcmFtcz8uZmlyc3RfbmFtZSB8fCAnJyxcbiAgICAgICAgbGFzdF9uYW1lOiByZWNvcmQ/LnBhcmFtcz8ubGFzdF9uYW1lIHx8ICcnLFxuICAgICAgICBlbWFpbDogcmVjb3JkPy5wYXJhbXM/LmVtYWlsIHx8ICcnLFxuICAgICAgICByb2xlOiByZWNvcmQ/LnBhcmFtcz8ucm9sZSB8fCAnJyxcbiAgICAgICAgc3RhdHVzOiByZWNvcmQ/LnBhcmFtcz8uc3RhdHVzIHx8ICcnLFxuICAgICAgICBzdHVkZW50VW5pdmVyc2l0eUlkOiByZWNvcmQ/LnBhcmFtcz8uc3R1ZGVudFVuaXZlcnNpdHlJZCA/PyBzdHVkZW50UHJvZmlsZT8udW5pdmVyc2l0eUlkID8/ICcnLFxuICAgICAgICBzdHVkZW50RmFjdWx0eUlkOiByZWNvcmQ/LnBhcmFtcz8uc3R1ZGVudEZhY3VsdHlJZCA/PyBzdHVkZW50UHJvZmlsZT8uZmFjdWx0eUlkID8/ICcnLFxuICAgICAgICBzdHVkZW50RGVwYXJ0bWVudElkOiByZWNvcmQ/LnBhcmFtcz8uc3R1ZGVudERlcGFydG1lbnRJZCA/PyBzdHVkZW50UHJvZmlsZT8uZGVwYXJ0bWVudElkID8/ICcnLFxuICAgICAgICBzdHVkZW50RmllbGRJZDogcmVjb3JkPy5wYXJhbXM/LnN0dWRlbnRGaWVsZElkID8/IHN0dWRlbnRQcm9maWxlPy5maWVsZElkID8/ICcnLFxuICAgICAgICBzdHVkZW50TGV2ZWxJZDogcmVjb3JkPy5wYXJhbXM/LnN0dWRlbnRMZXZlbElkID8/IHN0dWRlbnRQcm9maWxlPy5sZXZlbElkID8/ICcnLFxuICAgICAgICB0ZWFjaGVyVW5pdmVyc2l0eUlkOiByZWNvcmQ/LnBhcmFtcz8udGVhY2hlclVuaXZlcnNpdHlJZCA/PyB0ZWFjaGVyUHJvZmlsZT8udW5pdmVyc2l0eUlkID8/ICcnLFxuICAgICAgICB0ZWFjaGVyU3BlY2lhbGl6YXRpb246IHJlY29yZD8ucGFyYW1zPy50ZWFjaGVyU3BlY2lhbGl6YXRpb24gPz8gdGVhY2hlclByb2ZpbGU/LnNwZWNpYWxpemF0aW9uID8/ICcnLFxuICAgICAgICB0ZWFjaGVyQWNhZGVtaWNUaXRsZTogcmVjb3JkPy5wYXJhbXM/LnRlYWNoZXJBY2FkZW1pY1RpdGxlID8/IHRlYWNoZXJQcm9maWxlPy5hY2FkZW1pY190aXRsZSA/PyAnJyxcbiAgICB9KTtcbiAgICBjb25zdCBbaXNTYXZpbmcsIHNldElzU2F2aW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBoYW5kbGVTYXZlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZWNvcmRJZCA9IHJlY29yZD8uaWQgfHwgcmVjb3JkPy5wYXJhbXM/LmlkO1xuICAgICAgICBjb25zdCByZXNvdXJjZUlkID0gcmVzb3VyY2U/LmlkO1xuICAgICAgICBpZiAoIXJlY29yZElkIHx8ICFyZXNvdXJjZUlkKSB7XG4gICAgICAgICAgICBub3RpY2UoeyBtZXNzYWdlOiAnVW5hYmxlIHRvIHNhdmU6IG1pc3NpbmcgcmVjb3JkIGNvbnRleHQuJywgdHlwZTogJ2Vycm9yJyB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXlsb2FkID0gT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5lbnRyaWVzKGZvcm1TdGF0ZSkubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksIHZhbHVlID09PSAnJyA/IHVuZGVmaW5lZCA6IHZhbHVlXSkpO1xuICAgICAgICBzZXRJc1NhdmluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGFwaS5yZWNvcmRBY3Rpb24oe1xuICAgICAgICAgICAgICAgIHJlc291cmNlSWQsXG4gICAgICAgICAgICAgICAgcmVjb3JkSWQsXG4gICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ2VkaXQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHBheWxvYWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5vdGljZSh7IG1lc3NhZ2U6ICdVc2VyIHVwZGF0ZWQnLCB0eXBlOiAnc3VjY2VzcycgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBub3RpY2UoeyBtZXNzYWdlOiAnRmFpbGVkIHRvIHVwZGF0ZSB1c2VyLicsIHR5cGU6ICdlcnJvcicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBzZXRJc1NhdmluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHVuaXZlcnNpdHlPcHRpb25zID0gYnVpbGRPcHRpb25zKHJlZmVyZW5jZURhdGEudW5pdmVyc2l0aWVzIHx8IFtdKTtcbiAgICBjb25zdCBmYWN1bHR5T3B0aW9ucyA9IGJ1aWxkT3B0aW9ucygocmVmZXJlbmNlRGF0YS5mYWN1bHRpZXMgfHwgW10pLmZpbHRlcigoZmFjdWx0eSkgPT4gU3RyaW5nKGZhY3VsdHkudW5pdmVyc2l0eV9pZCkgPT09IFN0cmluZyhmb3JtU3RhdGUuc3R1ZGVudFVuaXZlcnNpdHlJZCkpKTtcbiAgICBjb25zdCBkZXBhcnRtZW50T3B0aW9ucyA9IGJ1aWxkT3B0aW9ucygocmVmZXJlbmNlRGF0YS5kZXBhcnRtZW50cyB8fCBbXSkuZmlsdGVyKChkZXBhcnRtZW50KSA9PiBTdHJpbmcoZGVwYXJ0bWVudC5mYWN1bHR5X2lkKSA9PT0gU3RyaW5nKGZvcm1TdGF0ZS5zdHVkZW50RmFjdWx0eUlkKSkpO1xuICAgIGNvbnN0IGZpZWxkT3B0aW9ucyA9IGJ1aWxkT3B0aW9ucygocmVmZXJlbmNlRGF0YS5maWVsZHMgfHwgW10pLmZpbHRlcigoZmllbGQpID0+IFN0cmluZyhmaWVsZC5kZXBhcnRtZW50X2lkKSA9PT0gU3RyaW5nKGZvcm1TdGF0ZS5zdHVkZW50RGVwYXJ0bWVudElkKSkpO1xuICAgIGNvbnN0IGxldmVsT3B0aW9ucyA9IGJ1aWxkT3B0aW9ucygocmVmZXJlbmNlRGF0YS5sZXZlbHMgfHwgW10pLmZpbHRlcigobGV2ZWwpID0+IFN0cmluZyhsZXZlbC5maWVsZF9pZCkgPT09IFN0cmluZyhmb3JtU3RhdGUuc3R1ZGVudEZpZWxkSWQpKSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6IDIwLCBwYWRkaW5nOiAyNCB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiBzZWN0aW9uU3R5bGUgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAxNiwgYWxpZ25JdGVtczogJ2NlbnRlcicgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGJ1aWxkQXZhdGFyVXJsKHJlY29yZCksIGFsdDogXCJBdmF0YXJcIiwgc3R5bGU6IHsgd2lkdGg6IDY0LCBoZWlnaHQ6IDY0LCBib3JkZXJSYWRpdXM6ICc1MCUnLCBvYmplY3RGaXQ6ICdjb3ZlcicgfSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIMiwgeyBzdHlsZTogeyBtYXJnaW46IDAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkPy5wYXJhbXM/LmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZD8ucGFyYW1zPy5sYXN0X25hbWUpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgc3R5bGU6IHsgY29sb3I6ICcjNjQ3NDhCJyB9IH0sIHJlY29yZD8ucGFyYW1zPy5lbWFpbCksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA4LCBtYXJnaW5Ub3A6IDYgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCYWRnZSwgbnVsbCwgcmVjb3JkPy5wYXJhbXM/LnJvbGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCYWRnZSwgbnVsbCwgcmVjb3JkPy5wYXJhbXM/LnN0YXR1cykpKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogc2VjdGlvblN0eWxlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEgyLCB7IHN0eWxlOiB7IG1hcmdpbjogMCB9IH0sIFwiVXNlciBEZXRhaWxzXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjIwcHgsIDFmcikpJywgZ2FwOiAxMiB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIG51bGwsIFwiRmlyc3QgbmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyB2YWx1ZTogZm9ybVN0YXRlLmZpcnN0X25hbWUsIG9uQ2hhbmdlOiAoZXZlbnQpID0+IHNldEZvcm1TdGF0ZSgocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIG51bGwsIFwiTGFzdCBuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IHZhbHVlOiBmb3JtU3RhdGUubGFzdF9uYW1lLCBvbkNoYW5nZTogKGV2ZW50KSA9PiBzZXRGb3JtU3RhdGUoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X25hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIG51bGwsIFwiRW1haWxcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgdmFsdWU6IGZvcm1TdGF0ZS5lbWFpbCwgb25DaGFuZ2U6IChldmVudCkgPT4gc2V0Rm9ybVN0YXRlKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBlbWFpbDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pKSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIG51bGwsIFwiUm9sZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIHsgdmFsdWU6IHJvbGVPcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBmb3JtU3RhdGUucm9sZSksIG9wdGlvbnM6IHJvbGVPcHRpb25zLCBvbkNoYW5nZTogKHNlbGVjdGVkKSA9PiBzZXRGb3JtU3RhdGUoKHByZXYpID0+ICh7IC4uLnByZXYsIHJvbGU6IHNlbGVjdGVkPy52YWx1ZSB8fCAnJyB9KSkgfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCBcIlN0YXR1c1wiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIHsgdmFsdWU6IHN0YXR1c09wdGlvbnMuZmluZCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IGZvcm1TdGF0ZS5zdGF0dXMpLCBvcHRpb25zOiBzdGF0dXNPcHRpb25zLCBvbkNoYW5nZTogKHNlbGVjdGVkKSA9PiBzZXRGb3JtU3RhdGUoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHNlbGVjdGVkPy52YWx1ZSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSB9KSkpKSxcbiAgICAgICAgc3R1ZGVudFByb2ZpbGUgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHNlY3Rpb25TdHlsZSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIMiwgeyBzdHlsZTogeyBtYXJnaW46IDAgfSB9LCBcIlN0dWRlbnQgQWNhZGVtaWMgSW5mb1wiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKScsIGdhcDogMTIgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCBcIlVuaXZlcnNpdHlcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0LCB7IHZhbHVlOiB1bml2ZXJzaXR5T3B0aW9ucy5maW5kKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSA9PT0gU3RyaW5nKGZvcm1TdGF0ZS5zdHVkZW50VW5pdmVyc2l0eUlkKSksIG9wdGlvbnM6IHVuaXZlcnNpdHlPcHRpb25zLCBvbkNoYW5nZTogKHNlbGVjdGVkKSA9PiBzZXRGb3JtU3RhdGUoKHByZXYpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50VW5pdmVyc2l0eUlkOiBzZWxlY3RlZD8udmFsdWUgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudEZhY3VsdHlJZDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudERlcGFydG1lbnRJZDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudEZpZWxkSWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnRMZXZlbElkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIG51bGwsIFwiRmFjdWx0eVwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIHsgdmFsdWU6IGZhY3VsdHlPcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBTdHJpbmcoZm9ybVN0YXRlLnN0dWRlbnRGYWN1bHR5SWQpKSwgb3B0aW9uczogZmFjdWx0eU9wdGlvbnMsIG9uQ2hhbmdlOiAoc2VsZWN0ZWQpID0+IHNldEZvcm1TdGF0ZSgocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnRGYWN1bHR5SWQ6IHNlbGVjdGVkPy52YWx1ZSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50RGVwYXJ0bWVudElkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50RmllbGRJZDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudExldmVsSWQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgbnVsbCwgXCJEZXBhcnRtZW50XCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgeyB2YWx1ZTogZGVwYXJ0bWVudE9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IFN0cmluZyhmb3JtU3RhdGUuc3R1ZGVudERlcGFydG1lbnRJZCkpLCBvcHRpb25zOiBkZXBhcnRtZW50T3B0aW9ucywgb25DaGFuZ2U6IChzZWxlY3RlZCkgPT4gc2V0Rm9ybVN0YXRlKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudERlcGFydG1lbnRJZDogc2VsZWN0ZWQ/LnZhbHVlIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0dWRlbnRGaWVsZElkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50TGV2ZWxJZDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkgfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCBcIkZpZWxkXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgeyB2YWx1ZTogZmllbGRPcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBTdHJpbmcoZm9ybVN0YXRlLnN0dWRlbnRGaWVsZElkKSksIG9wdGlvbnM6IGZpZWxkT3B0aW9ucywgb25DaGFuZ2U6IChzZWxlY3RlZCkgPT4gc2V0Rm9ybVN0YXRlKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudEZpZWxkSWQ6IHNlbGVjdGVkPy52YWx1ZSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHVkZW50TGV2ZWxJZDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkgfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCBcIkxldmVsXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgeyB2YWx1ZTogbGV2ZWxPcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBTdHJpbmcoZm9ybVN0YXRlLnN0dWRlbnRMZXZlbElkKSksIG9wdGlvbnM6IGxldmVsT3B0aW9ucywgb25DaGFuZ2U6IChzZWxlY3RlZCkgPT4gc2V0Rm9ybVN0YXRlKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R1ZGVudExldmVsSWQ6IHNlbGVjdGVkPy52YWx1ZSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSB9KSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCB7IHN0eWxlOiB7IGNvbG9yOiAnIzk0QTNCOCcgfSB9LCBcIlNlbGVjdCB0aGUgYWNhZGVtaWMgdW5pdHMgZm9yIHRoaXMgc3R1ZGVudC5cIikpKSA6IG51bGwsXG4gICAgICAgIHRlYWNoZXJQcm9maWxlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiBzZWN0aW9uU3R5bGUgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSDIsIHsgc3R5bGU6IHsgbWFyZ2luOiAwIH0gfSwgXCJUZWFjaGVyIFByb2ZpbGVcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSknLCBnYXA6IDEyIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgbnVsbCwgXCJVbml2ZXJzaXR5XCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgeyB2YWx1ZTogdW5pdmVyc2l0eU9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IFN0cmluZyhmb3JtU3RhdGUudGVhY2hlclVuaXZlcnNpdHlJZCkpLCBvcHRpb25zOiB1bml2ZXJzaXR5T3B0aW9ucywgb25DaGFuZ2U6IChzZWxlY3RlZCkgPT4gc2V0Rm9ybVN0YXRlKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhY2hlclVuaXZlcnNpdHlJZDogc2VsZWN0ZWQ/LnZhbHVlIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgbnVsbCwgXCJTcGVjaWFsaXphdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyB2YWx1ZTogZm9ybVN0YXRlLnRlYWNoZXJTcGVjaWFsaXphdGlvbiwgb25DaGFuZ2U6IChldmVudCkgPT4gc2V0Rm9ybVN0YXRlKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhY2hlclNwZWNpYWxpemF0aW9uOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkgfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCBcIkFjYWRlbWljIHRpdGxlXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgeyB2YWx1ZTogYWNhZGVtaWNUaXRsZU9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IFN0cmluZyhmb3JtU3RhdGUudGVhY2hlckFjYWRlbWljVGl0bGUpKSwgb3B0aW9uczogYWNhZGVtaWNUaXRsZU9wdGlvbnMsIG9uQ2hhbmdlOiAoc2VsZWN0ZWQpID0+IHNldEZvcm1TdGF0ZSgocHJldikgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYWNoZXJBY2FkZW1pY1RpdGxlOiBzZWxlY3RlZD8udmFsdWUgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkgfSkpKSkpIDogbnVsbCxcbiAgICAgICAgIXN0dWRlbnRQcm9maWxlICYmICF0ZWFjaGVyUHJvZmlsZSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogc2VjdGlvblN0eWxlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgc3R5bGU6IHsgY29sb3I6ICcjOTRBM0I4JyB9IH0sIFwiVGhpcyB1c2VyIGRvZXMgbm90IGhhdmUgc3R1ZGVudCBvciB0ZWFjaGVyIHByb2ZpbGUgZGF0YSB5ZXQuXCIpKSkgOiBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhcmlhbnQ6IFwicHJpbWFyeVwiLCBvbkNsaWNrOiBoYW5kbGVTYXZlLCBkaXNhYmxlZDogaXNTYXZpbmcgfSwgaXNTYXZpbmcgPyAnU2F2aW5nLi4uJyA6ICdTYXZlIGNoYW5nZXMnKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBVc2VyRWRpdDtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU5vdGljZSB9IGZyb20gJ2FkbWluanMnO1xuaW1wb3J0IHsgQXBpQ2xpZW50IH0gZnJvbSAnYWRtaW5qcyc7XG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KCk7XG5jb25zdCBDb25maXJtVXNlckFjdGlvbiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IG5vdGljZSA9IHVzZU5vdGljZSgpO1xuICAgIGNvbnN0IHsgcmVjb3JkIH0gPSBwcm9wcztcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb25maXJtVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnJlY29yZEFjdGlvbih7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2VJZDogJ1VzZXInLFxuICAgICAgICAgICAgICAgIHJlY29yZElkOiByZWNvcmQuaWQsXG4gICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ2NvbmZpcm0nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5ub3RpY2UpIHtcbiAgICAgICAgICAgICAgICBub3RpY2UocmVzcG9uc2UuZGF0YS5ub3RpY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FkbWluL3Jlc291cmNlcy9Vc2VyJztcbiAgICAgICAgfTtcbiAgICAgICAgY29uZmlybVVzZXIoKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIG51bGw7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29uZmlybVVzZXJBY3Rpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBIMSwgSDIsIFRleHQsIExpbmsgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmNvbnN0IGJ1aWxkQXZhdGFyVXJsID0gKHJlY29yZCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcmVjb3JkPy5hdmF0YXJfdXJsO1xuICAgIGlmICh2YWx1ZSlcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIGNvbnN0IG5hbWUgPSBgJHtyZWNvcmQ/LmZpcnN0X25hbWUgfHwgJ1VzZXInfSAke3JlY29yZD8ubGFzdF9uYW1lIHx8ICcnfWAudHJpbSgpO1xuICAgIHJldHVybiBgaHR0cHM6Ly91aS1hdmF0YXJzLmNvbS9hcGkvP25hbWU9JHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9JmJhY2tncm91bmQ9NEY0NkU1JmNvbG9yPWZmZmA7XG59O1xuY29uc3QgY2FyZCA9IHtcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgcGFkZGluZzogMTYsXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2U2ZWRmMycsXG4gICAgbWFyZ2luQm90dG9tOiAxNixcbn07XG5jb25zdCBmbGV4V3JhcCA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZ2FwOiAxNixcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0Jyxcbn07XG5jb25zdCBoYWxmID0ge1xuICAgIGZsZXg6IDEsXG4gICAgbWluV2lkdGg6IDMyMCxcbn07XG5jb25zdCBhdmF0YXIgPSB7XG4gICAgd2lkdGg6IDM0LFxuICAgIGhlaWdodDogMzQsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgbWFyZ2luUmlnaHQ6IDEwLFxufTtcbmNvbnN0IHJvdyA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luQm90dG9tOiA4LFxuICAgIHBhZGRpbmdUb3A6IDQsXG4gICAgcGFkZGluZ0JvdHRvbTogNCxcbn07XG5jb25zdCBDb3Vyc2VTaG93ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgY291cnNlID0gcHJvcHMucmVjb3JkPy5wYXJhbXM/LmZ1bGw7XG4gICAgaWYgKCFjb3Vyc2UpXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIFwiTG9hZGluZy4uLlwiKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogY2FyZCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIMSwgbnVsbCwgY291cnNlLm5hbWUpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJDb2RlOlwiKSxcbiAgICAgICAgICAgICAgICBcIiBcIixcbiAgICAgICAgICAgICAgICBjb3Vyc2UuY29kZSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIlN0YXR1czpcIiksXG4gICAgICAgICAgICAgICAgXCIgXCIsXG4gICAgICAgICAgICAgICAgY291cnNlLnN0YXR1cyksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIk1vZHVsZTpcIiksXG4gICAgICAgICAgICAgICAgXCIgXCIsXG4gICAgICAgICAgICAgICAgY291cnNlLm1vZHVsZT8ubmFtZSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIkZhY3VsdHk6XCIpLFxuICAgICAgICAgICAgICAgIFwiIFwiLFxuICAgICAgICAgICAgICAgIGNvdXJzZS5mYWN1bHR5Py5uYW1lKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFwiRmllbGQ6XCIpLFxuICAgICAgICAgICAgICAgIFwiIFwiLFxuICAgICAgICAgICAgICAgIGNvdXJzZS5maWVsZD8ubmFtZSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvdXJzZVNlY3Rpb25zLCB7IHNlY3Rpb25zOiBjb3Vyc2UuY291cnNlU2VjdGlvbnMgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiBmbGV4V3JhcCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHsgLi4uY2FyZCwgLi4uaGFsZiB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb3Vyc2VFbnJvbGxtZW50cywgeyBlbnJvbGxtZW50czogY291cnNlLmNvdXJzZUVucm9sbG1lbnRzIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7IC4uLmNhcmQsIC4uLmhhbGYgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHVibGlzaGVyQ2FyZCwgeyBwdWJsaXNoZXI6IGNvdXJzZS5wdWJsaXNoZXIgfSkpKSkpO1xufTtcbmV4cG9ydCBjb25zdCBDb3Vyc2VTZWN0aW9ucyA9ICh7IHNlY3Rpb25zIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiBjYXJkIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSDIsIG51bGwsIFwiQ291cnNlIFNlY3Rpb25zXCIpLFxuICAgICAgICBzZWN0aW9ucz8ubGVuZ3RoID09PSAwICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgXCJObyBzZWN0aW9uc1wiKSxcbiAgICAgICAgc2VjdGlvbnM/Lm1hcCgocykgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IGtleTogcy5pZCwgc3R5bGU6IHsgbWFyZ2luVG9wOiAxMiwgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWUnLCBwYWRkaW5nQm90dG9tOiAxMiB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBzLm9yZGVyLFxuICAgICAgICAgICAgICAgICAgICBcIi4gXCIsXG4gICAgICAgICAgICAgICAgICAgIHMudGl0bGUpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgcy5jb250ZW50KSxcbiAgICAgICAgICAgIHMubWF0ZXJpYWxzPy5sZW5ndGggPiAwICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogeyBtYXJnaW5Ub3A6IDggfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIk1hdGVyaWFsczpcIikpLFxuICAgICAgICAgICAgICAgIHMubWF0ZXJpYWxzLm1hcCgobSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IGtleTogbS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgaHJlZjogbS5saW5rLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx1MkIwNyBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG0ubmFtZSkpKSkpKSkpKSkpO1xufTtcbmV4cG9ydCBjb25zdCBDb3Vyc2VFbnJvbGxtZW50cyA9ICh7IGVucm9sbG1lbnRzIH0pID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7IG1heEhlaWdodDogMzAwLCBvdmVyZmxvd1k6ICdhdXRvJyB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSDIsIG51bGwsXG4gICAgICAgICAgICBcIlN0dWRlbnRzIEVucm9sbGVkIChcIixcbiAgICAgICAgICAgIGVucm9sbG1lbnRzPy5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIFwiKVwiKSxcbiAgICAgICAgZW5yb2xsbWVudHM/Lm1hcCgoZSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IGtleTogZS5pZCwgc3R5bGU6IHJvdyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYnVpbGRBdmF0YXJVcmwoZS5zdHVkZW50Py51c2VyKSwgc3R5bGU6IGF2YXRhciB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgeyBzdHlsZTogeyBmb250V2VpZ2h0OiAnYm9sZCcgfSB9LFxuICAgICAgICAgICAgICAgIGUuc3R1ZGVudD8udXNlcj8uZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICBcIiBcIixcbiAgICAgICAgICAgICAgICBlLnN0dWRlbnQ/LnVzZXI/Lmxhc3RfbmFtZSkpKSkpKTtcbn07XG5leHBvcnQgY29uc3QgUHVibGlzaGVyQ2FyZCA9ICh7IHB1Ymxpc2hlciB9KSA9PiB7XG4gICAgaWYgKCFwdWJsaXNoZXIpXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIFwiTm8gcHVibGlzaGVyXCIpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSDIsIG51bGwsIFwiUHVibGlzaGVyXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogcm93IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBidWlsZEF2YXRhclVybChwdWJsaXNoZXIudXNlciksIHN0eWxlOiBhdmF0YXIgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1Ymxpc2hlci51c2VyPy5maXJzdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJsaXNoZXIudXNlcj8ubGFzdF9uYW1lKSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiAxMiB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIlVuaXZlcnNpdHk6XCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgcHVibGlzaGVyLnVuaXZlcnNpdHk/Lm5hbWUgfHwgJ+KAlCcpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiA4IH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFwiRW1haWw6XCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgcHVibGlzaGVyLnVzZXI/LmVtYWlsIHx8ICfigJQnKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VTaG93O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgSDEsIFRleHQsIExpbmsgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmNvbnN0IGNhcmQgPSB7XG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgIHBhZGRpbmc6IDE2LFxuICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlNmVkZjMnLFxuICAgIG1hcmdpbkJvdHRvbTogMTYsXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdFNob3coeyByZWNvcmQgfSkge1xuICAgIGNvbnN0IHBvc3QgPSByZWNvcmQ/LnBhcmFtcz8uZnVsbDtcbiAgICBpZiAoIXBvc3QpXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIFwiTG9hZGluZy4uLlwiKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogY2FyZCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIMSwgbnVsbCxcbiAgICAgICAgICAgICAgICBcIlBvc3QgI1wiLFxuICAgICAgICAgICAgICAgIHBvc3QuaWQpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJUeXBlOlwiKSxcbiAgICAgICAgICAgICAgICBcIiBcIixcbiAgICAgICAgICAgICAgICBwb3N0LnR5cGUpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJBdXRob3I6XCIpLFxuICAgICAgICAgICAgICAgICcgJyxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgaHJlZjogYC9hZG1pbi9yZXNvdXJjZXMvVXNlci9yZWNvcmRzLyR7cG9zdC5hdXRob3IuaWR9L3Nob3dgIH0sIHBvc3QuYXV0aG9yLmVtYWlsKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIkNyZWF0ZWQ6XCIpLFxuICAgICAgICAgICAgICAgIFwiIFwiLFxuICAgICAgICAgICAgICAgIG5ldyBEYXRlKHBvc3QuY3JlYXRlZF9hdCkudG9Mb2NhbGVTdHJpbmcoKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogY2FyZCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIMSwgbnVsbCwgXCJDb250ZW50XCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLCBwb3N0LmNvbnRlbnQpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IGNhcmQgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSDEsIG51bGwsXG4gICAgICAgICAgICAgICAgXCJNZWRpYSAoXCIsXG4gICAgICAgICAgICAgICAgcG9zdC5wb3N0TWVkaWFzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBcIilcIiksXG4gICAgICAgICAgICBwb3N0LnBvc3RNZWRpYXMubGVuZ3RoID09PSAwICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgXCJObyBtZWRpYVwiKSxcbiAgICAgICAgICAgIHBvc3QucG9zdE1lZGlhcy5tYXAoKG0pID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBrZXk6IG0uaWQsIHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTAgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgbS50eXBlKSxcbiAgICAgICAgICAgICAgICBtLnR5cGUuc3RhcnRzV2l0aCgnSU1BR0UnKSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogbS51cmwsIHN0eWxlOiB7IG1heFdpZHRoOiAyMDAsIGJvcmRlclJhZGl1czogOCB9IH0pKSxcbiAgICAgICAgICAgICAgICBtLnR5cGUuc3RhcnRzV2l0aCgnVklERU8nKSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInZpZGVvXCIsIHsgc3JjOiBtLnVybCwgY29udHJvbHM6IHRydWUsIHN0eWxlOiB7IG1heFdpZHRoOiAzMDAgfSB9KSkpKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogY2FyZCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIMSwgbnVsbCxcbiAgICAgICAgICAgICAgICBcIkxpa2VzIChcIixcbiAgICAgICAgICAgICAgICBwb3N0Lmxpa2VzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBcIilcIiksXG4gICAgICAgICAgICBwb3N0Lmxpa2VzLm1hcCgobCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgeyBrZXk6IGwuaWQgfSxcbiAgICAgICAgICAgICAgICBcIlxcdTI3NjRcXHVGRTBGIFwiLFxuICAgICAgICAgICAgICAgIGwudXNlci5lbWFpbCkpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiBjYXJkIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEgxLCBudWxsLFxuICAgICAgICAgICAgICAgIFwiQ29tbWVudHMgKFwiLFxuICAgICAgICAgICAgICAgIHBvc3QuY29tbWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIFwiKVwiKSxcbiAgICAgICAgICAgIHBvc3QuY29tbWVudHMubWFwKChjKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsga2V5OiBjLmlkLCBzdHlsZTogeyBtYXJnaW5Cb3R0b206IDEwIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuYXV0aG9yLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCI6XCIpLFxuICAgICAgICAgICAgICAgICAgICBcIiBcIixcbiAgICAgICAgICAgICAgICAgICAgYy5jb250ZW50KSkpKSkpKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBIMSwgVGFibGUsIFRleHQsIEJ1dHRvbiB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuY29uc3Qgc3R5bGVzID0ge1xuICAgIGNhcmQ6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgIHBhZGRpbmc6IDE2LFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2U2ZWRmMycsXG4gICAgICAgIG1hcmdpblRvcDogMjAsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyxcbiAgICB9LFxuICAgIHRoOiB7XG4gICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZjJmNycsXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2Y3ZmFmYycsXG4gICAgfSxcbiAgICB0ZDoge1xuICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICB9LFxuICAgIGJhZGdlOiB7XG4gICAgICAgIHBhZGRpbmc6ICc0cHggOHB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVuaXZlcnNpdHlTaG93Q2hpbGRyZW4oeyByZWNvcmQgfSkge1xuICAgIGNvbnN0IFtmYWN1bHRpZXMsIHNldEZhY3VsdGllc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgdW5pdmVyc2l0eUlkID0gcmVjb3JkPy5wYXJhbXM/LmlkO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghdW5pdmVyc2l0eUlkKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9oaWVyYXJjaHkvdW5pdmVyc2l0eS8ke3VuaXZlcnNpdHlJZH0vZmFjdWx0aWVzYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0RmFjdWx0aWVzKGRhdGEgfHwgW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgIHNldEZhY3VsdGllcyhbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICB9LCBbdW5pdmVyc2l0eUlkXSk7XG4gICAgaWYgKGxvYWRpbmcpXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIFwiTG9hZGluZyBmYWN1bHRpZXMuLi5cIik7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHN0eWxlcy5jYXJkIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEgxLCBudWxsLCBcIkdlbmVyYWwgSW5mb3JtYXRpb25zXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjIwcHgsIDFmcikpJywgZ2FwOiAxMiwgbWFyZ2luVG9wOiAxMiB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJOYW1lOlwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgcmVjb3JkPy5wYXJhbXM/Lm5hbWUgfHwgJy0nKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJTaG9ydCBOYW1lOlwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgcmVjb3JkPy5wYXJhbXM/LnNob3J0X25hbWUgfHwgJy0nKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJFbWFpbDpcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIHJlY29yZD8ucGFyYW1zPy5lbWFpbCB8fCAnLScpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIlBob25lOlwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgcmVjb3JkPy5wYXJhbXM/LnBob25lIHx8ICctJykpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFwiQ2l0eTpcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIHJlY29yZD8ucGFyYW1zPy5jaXR5IHx8ICctJykpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFwiV2Vic2l0ZTpcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIHJlY29yZD8ucGFyYW1zPy53ZWJzaXRlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogcmVjb3JkLnBhcmFtcy53ZWJzaXRlLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIHJlbDogXCJub3JlZmVycmVyXCIgfSwgcmVjb3JkLnBhcmFtcy53ZWJzaXRlKSkgOiAnLScpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIkNyZWF0ZWQgQXQ6XCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLCByZWNvcmQ/LnBhcmFtcz8uY3JlYXRlZF9hdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgRGF0ZShyZWNvcmQucGFyYW1zLmNyZWF0ZWRfYXQpLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJy0nKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJVcGRhdGVkIEF0OlwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgcmVjb3JkPy5wYXJhbXM/LnVwZGF0ZWRfYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3IERhdGUocmVjb3JkLnBhcmFtcy51cGRhdGVkX2F0KS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICctJykpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiBzdHlsZXMuY2FyZCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIMSwgbnVsbCxcbiAgICAgICAgICAgICAgICBcIkZhY3VsdGllcyAoXCIsXG4gICAgICAgICAgICAgICAgZmFjdWx0aWVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBcIilcIiksXG4gICAgICAgICAgICBmYWN1bHRpZXMubGVuZ3RoID09PSAwICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgXCJObyBmYWN1bHRpZXMgZm91bmQuXCIpLFxuICAgICAgICAgICAgZmFjdWx0aWVzLmxlbmd0aCA+IDAgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGUsIHsgc3R5bGU6IHN0eWxlcy50YWJsZSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IHN0eWxlOiBzdHlsZXMudGggfSwgXCJOYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsgc3R5bGU6IHN0eWxlcy50aCB9LCBcIkNvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBzdHlsZTogc3R5bGVzLnRoIH0sIFwiRGVwYXJ0bWVudHNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBzdHlsZTogc3R5bGVzLnRoIH0sIFwiQ3JlYXRlZFwiKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCBudWxsLCBmYWN1bHRpZXMubWFwKChmKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIHsga2V5OiBmLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBzdHlsZTogc3R5bGVzLnRkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBmLm5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IHN0eWxlOiBzdHlsZXMudGQgfSwgZi5jb2RlIHx8ICctJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBzdHlsZTogc3R5bGVzLnRkIH0sIGYuX2NvdW50Py5kZXBhcnRtZW50cyA/PyAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IHN0eWxlOiBzdHlsZXMudGQgfSwgZi5jcmVhdGVkX2F0ID8gbmV3IERhdGUoZi5jcmVhdGVkX2F0KS50b0xvY2FsZURhdGVTdHJpbmcoKSA6ICctJykpKTtcbiAgICAgICAgICAgICAgICB9KSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IG10OiBcImxnXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBhczogXCJhXCIsIGhyZWY6IGBodHRwOi8vbG9jYWxob3N0OjUwNTAvYWRtaW4vcmVzb3VyY2VzL0ZhY3VsdHk/cGFnZT0xJmZpbHRlcnMudW5pdmVyc2l0eT0ke3JlY29yZD8uaWR9YCB9LCBcIk1hbmFnZSBGYWN1bHRpZXNcIikpKSkpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEgxLCBUZXh0LCBCdXR0b24sIExpbmsgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBjYXJkOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICBwYWRkaW5nOiAxNixcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlNmVkZjMnLFxuICAgICAgICBtYXJnaW5Ub3A6IDIwLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsXG4gICAgfSxcbiAgICB0aDoge1xuICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgYmFja2dyb3VuZDogJyNmN2ZhZmMnLFxuICAgIH0sXG4gICAgdGQ6IHtcbiAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgfSxcbiAgICBiYWRnZToge1xuICAgICAgICBwYWRkaW5nOiAnNHB4IDhweCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYWN1bHR5U2hvd0NoaWxkcmVuKHsgcmVjb3JkIH0pIHtcbiAgICBjb25zdCBbZGVwYXJ0bWVudHMsIHNldERlcGFydG1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBmYWN1bHR5SWQgPSByZWNvcmQ/LnBhcmFtcz8uaWQ7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFmYWN1bHR5SWQpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2hpZXJhcmNoeS9mYWN1bHR5LyR7ZmFjdWx0eUlkfS9kZXBhcnRtZW50c2ApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgIHNldERlcGFydG1lbnRzKGRhdGEgfHwgW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgIHNldERlcGFydG1lbnRzKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH0sIFtmYWN1bHR5SWRdKTtcbiAgICBpZiAobG9hZGluZylcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgXCJMb2FkaW5nIGRlcGFydG1lbnRzLi4uXCIpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiBzdHlsZXMuY2FyZCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIMSwgbnVsbCwgXCJHZW5lcmFsIEluZm9ybWF0aW9uc1wiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKScsIGdhcDogMTIsIG1hcmdpblRvcDogMTIgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFwiTmFtZTpcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIHJlY29yZD8ucGFyYW1zPy5uYW1lIHx8ICctJykpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFwiQ29kZTpcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIHJlY29yZD8ucGFyYW1zPy5jb2RlIHx8ICctJykpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFwiVW5pdmVyc2l0eTpcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIHsgaHJlZjogYC9hZG1pbi9yZXNvdXJjZXMvVW5pdmVyc2l0eS9yZWNvcmRzLyR7cmVjb3JkPy5wYXJhbXM/LnVuaXZlcnNpdHkuaWR9L3Nob3dgIH0sIHJlY29yZD8ucGFyYW1zPy51bml2ZXJzaXR5Lm5hbWUgfHwgJy0nKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJDcmVhdGVkIEF0OlwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgcmVjb3JkPy5wYXJhbXM/LmNyZWF0ZWRfYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3IERhdGUocmVjb3JkLnBhcmFtcy5jcmVhdGVkX2F0KS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICctJykpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFwiVXBkYXRlZCBBdDpcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIHJlY29yZD8ucGFyYW1zPy51cGRhdGVkX2F0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IG5ldyBEYXRlKHJlY29yZC5wYXJhbXMudXBkYXRlZF9hdCkudG9Mb2NhbGVTdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnLScpKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogc3R5bGVzLmNhcmQgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSDEsIG51bGwsXG4gICAgICAgICAgICAgICAgXCJEZXBhcnRtZW50cyAoXCIsXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIFwiKVwiKSxcbiAgICAgICAgICAgIGRlcGFydG1lbnRzLmxlbmd0aCA9PT0gMCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIFwiTm8gZGVwYXJ0bWVudHMgZm91bmQuXCIpLFxuICAgICAgICAgICAgZGVwYXJ0bWVudHMubGVuZ3RoID4gMCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHsgc3R5bGU6IHN0eWxlcy50YWJsZSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IHN0eWxlOiBzdHlsZXMudGggfSwgXCJOYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsgc3R5bGU6IHN0eWxlcy50aCB9LCBcIkNvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBzdHlsZTogc3R5bGVzLnRoIH0sIFwiRmllbGRzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsgc3R5bGU6IHN0eWxlcy50aCB9LCBcIkNyZWF0ZWRcIikpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgZGVwYXJ0bWVudHMubWFwKChkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIHsga2V5OiBkLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBzdHlsZTogc3R5bGVzLnRkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBkLm5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IHN0eWxlOiBzdHlsZXMudGQgfSwgZC5jb2RlIHx8ICctJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBzdHlsZTogc3R5bGVzLnRkIH0sIGQuX2NvdW50Py5maWVsZHMgPz8gMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBzdHlsZTogc3R5bGVzLnRkIH0sIGQuY3JlYXRlZF9hdCA/IG5ldyBEYXRlKGQuY3JlYXRlZF9hdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkgOiAnLScpKSk7XG4gICAgICAgICAgICAgICAgfSkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBtdDogXCJsZ1wiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgYXM6IFwiYVwiLCBocmVmOiBgL2FkbWluL3Jlc291cmNlcy9EZXBhcnRtZW50P3BhZ2U9MSZmaWx0ZXJzLmZhY3VsdHk9JHtyZWNvcmQ/LnBhcmFtcz8uaWR9YCB9LCBcIk1hbmFnZSBEZXBhcnRtZW50c1wiKSkpKSk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgSDEsIFRleHQsIEJ1dHRvbiwgTGluayB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuY29uc3Qgc3R5bGVzID0ge1xuICAgIGNhcmQ6IHtcbiAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgIHBhZGRpbmc6IDE2LFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2U2ZWRmMycsXG4gICAgICAgIG1hcmdpblRvcDogMjAsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyxcbiAgICB9LFxuICAgIHRoOiB7XG4gICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgI2VlZjJmNycsXG4gICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2Y3ZmFmYycsXG4gICAgfSxcbiAgICB0ZDoge1xuICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICB9LFxuICAgIGJhZGdlOiB7XG4gICAgICAgIHBhZGRpbmc6ICc0cHggOHB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcGFydG1lbnRTaG93Q2hpbGRyZW4oeyByZWNvcmQgfSkge1xuICAgIGNvbnN0IFtmaWVsZHMsIHNldEZpZWxkc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgZGVwYXJ0bWVudElkID0gcmVjb3JkPy5wYXJhbXM/LmlkO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghZGVwYXJ0bWVudElkKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9oaWVyYXJjaHkvZGVwYXJ0bWVudC8ke2RlcGFydG1lbnRJZH0vZmllbGRzYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0RmllbGRzKGRhdGEgfHwgW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgICAgIHNldEZpZWxkcyhbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICB9LCBbZGVwYXJ0bWVudElkXSk7XG4gICAgaWYgKGxvYWRpbmcpXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIFwiTG9hZGluZyBmaWVsZHMuLi5cIik7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHN0eWxlcy5jYXJkIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEgxLCBudWxsLCBcIkdlbmVyYWwgSW5mb3JtYXRpb25zXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjIwcHgsIDFmcikpJywgZ2FwOiAxMiwgbWFyZ2luVG9wOiAxMiB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJOYW1lOlwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgcmVjb3JkPy5wYXJhbXM/Lm5hbWUgfHwgJy0nKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJDb2RlOlwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgcmVjb3JkPy5wYXJhbXM/LmNvZGUgfHwgJy0nKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJVbml2ZXJzaXR5OlwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyBocmVmOiBgL2FkbWluL3Jlc291cmNlcy9Vbml2ZXJzaXR5L3JlY29yZHMvJHtyZWNvcmQ/LnBhcmFtcz8udW5pdmVyc2l0eS5pZH0vc2hvd2AgfSwgcmVjb3JkPy5wYXJhbXM/LnVuaXZlcnNpdHkubmFtZSB8fCAnLScpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIkZhY3VsdHk6XCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IGhyZWY6IGAvYWRtaW4vcmVzb3VyY2VzL0ZhY3VsdHkvcmVjb3Jkcy8ke3JlY29yZD8ucGFyYW1zPy5mYWN1bHR5LmlkfS9zaG93YCB9LCByZWNvcmQ/LnBhcmFtcz8uZmFjdWx0eS5uYW1lIHx8ICctJykpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIFwiQ3JlYXRlZCBBdDpcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIHJlY29yZD8ucGFyYW1zPy5jcmVhdGVkX2F0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IG5ldyBEYXRlKHJlY29yZC5wYXJhbXMuY3JlYXRlZF9hdCkudG9Mb2NhbGVTdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnLScpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIlVwZGF0ZWQgQXQ6XCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLCByZWNvcmQ/LnBhcmFtcz8udXBkYXRlZF9hdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgRGF0ZShyZWNvcmQucGFyYW1zLnVwZGF0ZWRfYXQpLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJy0nKSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgc3R5bGU6IHN0eWxlcy5jYXJkIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEgxLCB7IHZhcmlhbnQ6IFwiaDRcIiB9LFxuICAgICAgICAgICAgICAgIFwiRmllbGRzIChcIixcbiAgICAgICAgICAgICAgICBmaWVsZHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIFwiKVwiKSxcbiAgICAgICAgICAgIGZpZWxkcy5sZW5ndGggPT09IDAgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLCBcIk5vIGZpZWxkcyBmb3VuZC5cIiksXG4gICAgICAgICAgICBmaWVsZHMubGVuZ3RoID4gMCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHsgc3R5bGU6IHN0eWxlcy50YWJsZSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IHN0eWxlOiBzdHlsZXMudGggfSwgXCJOYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsgc3R5bGU6IHN0eWxlcy50aCB9LCBcIkNvZGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBzdHlsZTogc3R5bGVzLnRoIH0sIFwiU3lzdGVtXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsgc3R5bGU6IHN0eWxlcy50aCB9LCBcIkxldmVsc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IHN0eWxlOiBzdHlsZXMudGggfSwgXCJDcmVhdGVkXCIpKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRib2R5XCIsIG51bGwsIGZpZWxkcy5tYXAoKGYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgeyBrZXk6IGYuaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IHN0eWxlOiBzdHlsZXMudGQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIGYubmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsgc3R5bGU6IHN0eWxlcy50ZCB9LCBmLmNvZGUgfHwgJy0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IHN0eWxlOiBzdHlsZXMudGQgfSwgZi5hY2FkZW1pY19zeXN0ZW0gfHwgJy0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IHN0eWxlOiBzdHlsZXMudGQgfSwgZi5fY291bnQ/LmxldmVscyA/PyAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IHN0eWxlOiBzdHlsZXMudGQgfSwgZi5jcmVhdGVkX2F0ID8gbmV3IERhdGUoZi5jcmVhdGVkX2F0KS50b0xvY2FsZURhdGVTdHJpbmcoKSA6ICctJykpKTtcbiAgICAgICAgICAgICAgICB9KSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IG10OiBcImxnXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBhczogXCJhXCIsIGhyZWY6IGAvYWRtaW4vcmVzb3VyY2VzL0ZpZWxkP3BhZ2U9MSZmaWx0ZXJzLmRlcGFydG1lbnQ9JHtyZWNvcmQ/LnBhcmFtcz8uaWR9YCB9LCBcIk1hbmFnZSBGaWVsZHNcIikpKSkpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIEgxLCBUZXh0LCBCdXR0b24sIExpbmsgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBjYXJkOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICBwYWRkaW5nOiAxNixcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlNmVkZjMnLFxuICAgICAgICBtYXJnaW5Ub3A6IDIwLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsXG4gICAgfSxcbiAgICB0aDoge1xuICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlZWYyZjcnLFxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgYmFja2dyb3VuZDogJyNmN2ZhZmMnLFxuICAgIH0sXG4gICAgdGQ6IHtcbiAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCAjZWVmMmY3JyxcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgfSxcbiAgICBiYWRnZToge1xuICAgICAgICBwYWRkaW5nOiAnNHB4IDhweCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIG1hcmdpblJpZ2h0OiA2LFxuICAgIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmllbGRTaG93Q2hpbGRyZW4oeyByZWNvcmQgfSkge1xuICAgIGNvbnN0IFtsZXZlbHMsIHNldExldmVsc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgZmllbGRJZCA9IHJlY29yZD8ucGFyYW1zPy5pZDtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWZpZWxkSWQpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2hpZXJhcmNoeS9maWVsZC8ke2ZpZWxkSWR9L2xldmVsc2ApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgIHNldExldmVscyhkYXRhIHx8IFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgICAgICBzZXRMZXZlbHMoW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfSwgW2ZpZWxkSWRdKTtcbiAgICBpZiAobG9hZGluZylcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgXCJMb2FkaW5nIGxldmVscy4uLlwiKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogc3R5bGVzLmNhcmQgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSDEsIG51bGwsIFwiR2VuZXJhbCBJbmZvcm1hdGlvbnNcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSknLCBnYXA6IDEyLCBtYXJnaW5Ub3A6IDEyIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIk5hbWU6XCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLCByZWNvcmQ/LnBhcmFtcz8ubmFtZSB8fCAnLScpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIkNvZGU6XCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLCByZWNvcmQ/LnBhcmFtcz8uY29kZSB8fCAnLScpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIkFjYWRlbWljIFN5c3RlbTpcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIHJlY29yZD8ucGFyYW1zPy5hY2FkZW1pY19zeXN0ZW0gfHwgJy0nKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJEZXBhcnRtZW50OlwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyBocmVmOiBgL2FkbWluL3Jlc291cmNlcy9EZXBhcnRtZW50L3JlY29yZHMvJHtyZWNvcmQ/LnBhcmFtcz8uZGVwYXJ0bWVudC5pZH0vc2hvd2AgfSwgcmVjb3JkPy5wYXJhbXM/LmRlcGFydG1lbnQubmFtZSB8fCAnLScpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCBudWxsLCBcIkNyZWF0ZWQgQXQ6XCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLCByZWNvcmQ/LnBhcmFtcz8uY3JlYXRlZF9hdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBuZXcgRGF0ZShyZWNvcmQucGFyYW1zLmNyZWF0ZWRfYXQpLnRvTG9jYWxlU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJy0nKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgXCJVcGRhdGVkIEF0OlwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgcmVjb3JkPy5wYXJhbXM/LnVwZGF0ZWRfYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3IERhdGUocmVjb3JkLnBhcmFtcy51cGRhdGVkX2F0KS50b0xvY2FsZVN0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICctJykpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiBzdHlsZXMuY2FyZCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIMSwgbnVsbCxcbiAgICAgICAgICAgICAgICBcIkxldmVscyAoXCIsXG4gICAgICAgICAgICAgICAgbGV2ZWxzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBcIilcIiksXG4gICAgICAgICAgICBsZXZlbHMubGVuZ3RoID09PSAwICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgXCJObyBsZXZlbHMgZm91bmQuXCIpLFxuICAgICAgICAgICAgbGV2ZWxzLmxlbmd0aCA+IDAgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7IHN0eWxlOiBzdHlsZXMudGFibGUgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBzdHlsZTogc3R5bGVzLnRoIH0sIFwiTmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IHN0eWxlOiBzdHlsZXMudGggfSwgXCJDeWNsZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IHN0eWxlOiBzdHlsZXMudGggfSwgXCJCYWRnZXNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBzdHlsZTogc3R5bGVzLnRoIH0sIFwiQ3JlYXRlZFwiKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiLCBudWxsLCBsZXZlbHMubWFwKChsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IGwuaXNBY3RpdmUgIT09IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7IGtleTogbC5pZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsgc3R5bGU6IHN0eWxlcy50ZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgbnVsbCwgbC5uYW1lKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBzdHlsZTogc3R5bGVzLnRkIH0sIGwuY3ljbGUgfHwgJy0nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IHN0eWxlOiBzdHlsZXMudGQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsLmlzX2ZpbmFsICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiB7IC4uLnN0eWxlcy5iYWRnZSwgYmFja2dyb3VuZDogJyNkYmVhZmUnLCBjb2xvcjogJyMwYzRhNmUnIH0gfSwgXCJGaW5hbFwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGVzLmJhZGdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYWN0aXZlID8gJyNlY2ZkZjUnIDogJyNmZmYxZjInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGFjdGl2ZSA/ICcjMDY1ZjQ2JyA6ICcjN2YxZDFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCBhY3RpdmUgPyAnQWN0aXZlJyA6ICdJbmFjdGl2ZScpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IHN0eWxlOiBzdHlsZXMudGQgfSwgbC5jcmVhdGVkX2F0ID8gbmV3IERhdGUobC5jcmVhdGVkX2F0KS50b0xvY2FsZURhdGVTdHJpbmcoKSA6ICctJykpKTtcbiAgICAgICAgICAgICAgICB9KSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IG10OiBcImxnXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBhczogXCJhXCIsIGhyZWY6IGAvYWRtaW4vcmVzb3VyY2VzL0xldmVsP3BhZ2U9MSZmaWx0ZXJzLmZpZWxkPSR7cmVjb3JkPy5wYXJhbXM/LmlkfWAgfSwgXCJNYW5hZ2UgTGV2ZWxzXCIpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHN0eWxlOiBzdHlsZXMuY2FyZCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIMSwgbnVsbCxcbiAgICAgICAgICAgICAgICBcIk1vZHVsZXMgKFwiLFxuICAgICAgICAgICAgICAgIHJlY29yZD8ucGFyYW1zPy5tb2R1bGVzPy5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgICAgICBcIilcIiksXG4gICAgICAgICAgICAhcmVjb3JkPy5wYXJhbXM/Lm1vZHVsZXMgfHwgcmVjb3JkLnBhcmFtcy5tb2R1bGVzLmxlbmd0aCA9PT0gMCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIFwiTm8gbW9kdWxlcyBmb3VuZC5cIikpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCB7IHN0eWxlOiBzdHlsZXMudGFibGUgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhcIiwgeyBzdHlsZTogc3R5bGVzLnRoIH0sIFwiTmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IHN0eWxlOiBzdHlsZXMudGggfSwgXCJDb2RlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsgc3R5bGU6IHN0eWxlcy50aCB9LCBcIlJlbGF0ZWQgRmllbGRzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsgc3R5bGU6IHN0eWxlcy50aCB9LCBcIlJlbGF0ZWQgTGV2ZWxzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRoXCIsIHsgc3R5bGU6IHN0eWxlcy50aCB9LCBcIkNvdXJzZXMgQ291bnRcIikpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgcmVjb3JkLnBhcmFtcy5tb2R1bGVzLm1hcCgobSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0clwiLCB7IGtleTogbS5pZCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBzdHlsZTogc3R5bGVzLnRkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIG51bGwsIG0ubmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBzdHlsZTogc3R5bGVzLnRkIH0sIG0uY29kZSB8fCAnLScpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgeyBzdHlsZTogc3R5bGVzLnRkIH0sIG0uZmllbGRzICYmIG0uZmllbGRzLmxlbmd0aCA+IDAgPyAobS5maWVsZHMubWFwKChmaWVsZCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgeyBrZXk6IGZpZWxkLmlkLCBocmVmOiBgL2FkbWluL3Jlc291cmNlcy9GaWVsZC9yZWNvcmRzLyR7ZmllbGQuaWR9L3Nob3dgLCBzdHlsZTogeyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGVzLmJhZGdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnI2UwZjJmZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzA3NTk4NScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCBmaWVsZC5uYW1lKSkpKSkgOiAoJy0nKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCB7IHN0eWxlOiBzdHlsZXMudGQgfSwgbS5sZXZlbHMgJiYgbS5sZXZlbHMubGVuZ3RoID4gMCA/IChtLmxldmVscy5tYXAoKGxldmVsKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IGtleTogbGV2ZWwuaWQsIGhyZWY6IGAvYWRtaW4vcmVzb3VyY2VzL0xldmVsL3JlY29yZHMvJHtsZXZlbC5pZH0vc2hvd2AsIHN0eWxlOiB7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZXMuYmFkZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjYzFmZWJiJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMTBhNDJiJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0sIGxldmVsLm5hbWUpKSkpKSA6ICgnLScpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsgc3R5bGU6IHN0eWxlcy50ZCB9LCBtLl9jb3VudD8uY291cnNlcyA/PyAwKSkpKSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IG10OiBcImxnXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBhczogXCJhXCIsIGhyZWY6IFwiL2FkbWluL3Jlc291cmNlcy9Nb2R1bGVcIiB9LCBcIk1hbmFnZSBNb2R1bGVzXCIpKSkpKTtcbn1cbiIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IExvZ2luIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9DdXN0b21Mb2dpbidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuTG9naW4gPSBMb2dpblxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvRGFzaGJvYXJkJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5EYXNoYm9hcmQgPSBEYXNoYm9hcmRcbmltcG9ydCBBdmF0YXJSZW5kZXJlciBmcm9tICcuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvQXZhdGFyUmVuZGVyZXInXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkF2YXRhclJlbmRlcmVyID0gQXZhdGFyUmVuZGVyZXJcbmltcG9ydCBFbWFpbExpbmtSZW5kZXJlciBmcm9tICcuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvRW1haWxMaW5rUmVuZGVyZXInXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkVtYWlsTGlua1JlbmRlcmVyID0gRW1haWxMaW5rUmVuZGVyZXJcbmltcG9ydCBTdGF0dXNCYWRnZVJlbmRlcmVyIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9TdGF0dXNCYWRnZVJlbmRlcmVyJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5TdGF0dXNCYWRnZVJlbmRlcmVyID0gU3RhdHVzQmFkZ2VSZW5kZXJlclxuaW1wb3J0IFJvbGVCYWRnZVJlbmRlcmVyIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9Sb2xlQmFkZ2VSZW5kZXJlcidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuUm9sZUJhZGdlUmVuZGVyZXIgPSBSb2xlQmFkZ2VSZW5kZXJlclxuaW1wb3J0IFVzZXJTaG93IGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9Vc2VyU2hvdydcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXNlclNob3cgPSBVc2VyU2hvd1xuaW1wb3J0IFVzZXJFZGl0IGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9Vc2VyRWRpdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXNlckVkaXQgPSBVc2VyRWRpdFxuaW1wb3J0IENvbmZpcm1Vc2VyQWN0aW9uIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9Db25maXJtVXNlckFjdGlvbidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ29uZmlybVVzZXJBY3Rpb24gPSBDb25maXJtVXNlckFjdGlvblxuaW1wb3J0IENvdXJzZVNob3cgZnJvbSAnLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL0NvdXJzZVNob3cnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNvdXJzZVNob3cgPSBDb3Vyc2VTaG93XG5pbXBvcnQgUG9zdFNob3cgZnJvbSAnLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL1Bvc3RTaG93J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Qb3N0U2hvdyA9IFBvc3RTaG93XG5pbXBvcnQgVW5pdmVyc2l0eVNob3dDaGlsZHJlbiBmcm9tICcuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvVW5pdmVyc2l0eVNob3dDaGlsZHJlbidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVW5pdmVyc2l0eVNob3dDaGlsZHJlbiA9IFVuaXZlcnNpdHlTaG93Q2hpbGRyZW5cbmltcG9ydCBGYWN1bHR5U2hvd0NoaWxkcmVuIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9GYWN1bHR5U2hvd0NoaWxkcmVuJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5GYWN1bHR5U2hvd0NoaWxkcmVuID0gRmFjdWx0eVNob3dDaGlsZHJlblxuaW1wb3J0IERlcGFydG1lbnRTaG93Q2hpbGRyZW4gZnJvbSAnLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL0RlcGFydG1lbnRTaG93Q2hpbGRyZW4nXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkRlcGFydG1lbnRTaG93Q2hpbGRyZW4gPSBEZXBhcnRtZW50U2hvd0NoaWxkcmVuXG5pbXBvcnQgRmllbGRTaG93Q2hpbGRyZW4gZnJvbSAnLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL0ZpZWxkU2hvd0NoaWxkcmVuJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5GaWVsZFNob3dDaGlsZHJlbiA9IEZpZWxkU2hvd0NoaWxkcmVuIl0sIm5hbWVzIjpbIkN1c3RvbUxvZ2luIiwicHJvcHMiLCJhY3Rpb24iLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkJveCIsInN0eWxlIiwic3R5bGVzIiwid3JhcHBlciIsImNhcmQiLCJsb2dvQ29udGFpbmVyIiwic3JjIiwiYnJhbmRpbmciLCJsb2dvIiwiYWx0IiwidGl0bGUiLCJzdWJ0aXRsZSIsIm1ldGhvZCIsIndpZHRoIiwiTGFiZWwiLCJJbnB1dCIsIm5hbWUiLCJ0eXBlIiwicmVxdWlyZWQiLCJpbnB1dCIsIm10IiwicGFzc3dvcmRXcmFwcGVyIiwiZXllSWNvbiIsIm9uQ2xpY2siLCJJY29uIiwiaWNvbiIsInNpemUiLCJCdXR0b24iLCJidXR0b24iLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZCIsImFuaW1hdGlvbiIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luQm90dG9tIiwib2JqZWN0Rml0IiwiZm9udFdlaWdodCIsImNvbG9yIiwiZm9udFNpemUiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwidHJhbnNmb3JtIiwiY3Vyc29yIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJhcGkiLCJBcGlDbGllbnQiLCJjYXJkU2hhZG93Iiwic29mdFNoYWRvdyIsImZvcm1hdENvdW50IiwidmFsdWUiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0IiwiZm9ybWF0UGVyY2VudCIsInRvdGFsIiwiTWF0aCIsInJvdW5kIiwiU2VjdGlvbkhlYWRlciIsImJhZGdlIiwiZ2FwIiwiSDIiLCJtYXJnaW4iLCJCYWRnZSIsIlN0YXRDYXJkIiwiYWNjZW50IiwibWluV2lkdGgiLCJib3JkZXJUb3AiLCJUZXh0IiwidGV4dFRyYW5zZm9ybSIsIkNsaWNrQ2FyZCIsImhpbnQiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInRyYW5zaXRpb24iLCJTdGF0R3JpZCIsImNoaWxkcmVuIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIlBpZUNoYXJ0IiwiaXRlbXMiLCJyZWR1Y2UiLCJzdW0iLCJpdGVtIiwiY3VycmVudCIsInNlZ21lbnRzIiwibWFwIiwic3RhcnQiLCJlbmQiLCJmbGV4V3JhcCIsImpvaW4iLCJrZXkiLCJsYWJlbCIsIkJhckxpc3QiLCJtYXgiLCJvdmVyZmxvdyIsIkxpbmVDaGFydCIsInBvaW50cyIsInBvaW50IiwicGF0aCIsImluZGV4IiwieCIsImxlbmd0aCIsInkiLCJ2aWV3Qm94IiwiZCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwiZmlsbCIsImRhdGUiLCJJbnNpZ2h0TGlzdCIsInZhbHVlTGFiZWwiLCJtaW5IZWlnaHQiLCJIMyIsImlkIiwiZmxleCIsIkRhc2hib2FyZCIsImRhdGEiLCJzZXREYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZUVmZmVjdCIsImdldERhc2hib2FyZCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImNoYXJ0cyIsInVzZU1lbW8iLCJ1c2VyRGlzdHJpYnV0aW9uIiwiY291cnNlU3RhdHVzIiwiRHJhZnQiLCJQZW5kaW5nIiwiQWNjZXB0ZWQiLCJSZWplY3RlZCIsImluc2lnaHRDYXJkcyIsImluc2lnaHRzIiwibW9zdEFjdGl2ZUNvdXJzZXMiLCJjb3Vyc2UiLCJtb3N0TGlrZWRQb3N0cyIsInBvc3QiLCJjb250ZW50Iiwic2xpY2UiLCJtb3N0Q29tbWVudGVkUG9zdHMiLCJ0b3BUZWFjaGVycyIsInRlYWNoZXIiLCJIMSIsIm1heFdpZHRoIiwia3BpcyIsInVzZXJzIiwic3R1ZGVudHMiLCJ0ZWFjaGVycyIsImFkbWlucyIsInBlbmRpbmciLCJiYW5uZWQiLCJtYXJnaW5Ub3AiLCJjb3Vyc2VzIiwiZHJhZnQiLCJhY2NlcHRlZCIsInJlamVjdGVkIiwicG9zdHMiLCJ0b2RheSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNvdXJzZXNQZXJGYWN1bHR5IiwidXNlckdyb3d0aCIsInZhcmlhbnQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInN0dWRlbnRzUGVyRmFjdWx0eSIsInN5c3RlbSIsInVuaXZlcnNpdGllcyIsImZhY3VsdGllcyIsImRlcGFydG1lbnRzIiwiZmllbGRzIiwibGV2ZWxzIiwic3R1ZGVudFByb2ZpbGVzIiwidGVhY2hlclByb2ZpbGVzIiwiYWRtaW5Qcm9maWxlcyIsImVucm9sbG1lbnRzIiwiYnVpbGRBdmF0YXJVcmwiLCJyZWNvcmQiLCJwYXJhbXMiLCJhdmF0YXJfdXJsIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInRyaW0iLCJlbmNvZGVVUklDb21wb25lbnQiLCJBdmF0YXJSZW5kZXJlciIsIkVtYWlsTGlua1JlbmRlcmVyIiwidGV4dERlY29yYXRpb24iLCJlbWFpbCIsIlNUQVRVU19DT0xPUlMiLCJDT05GSVJNRUQiLCJQRU5ESU5HIiwiQkFORUQiLCJTdGF0dXNCYWRnZVJlbmRlcmVyIiwic3RhdHVzIiwiY29sb3JzIiwiUk9MRV9DT0xPUlMiLCJBRE1JTiIsIlRFQUNIRVIiLCJTVFVERU5UIiwiUm9sZUJhZGdlUmVuZGVyZXIiLCJyb2xlIiwiYmFkZ2VTdHlsZSIsImJnIiwibGV0dGVyU3BhY2luZyIsInN0YXR1c0JhZGdlIiwicm9sZUJhZGdlIiwiSW5mb1JvdyIsIlNlY3Rpb25DYXJkIiwiVXNlclNob3ciLCJzdHVkZW50UHJvZmlsZSIsInRlYWNoZXJQcm9maWxlIiwiYWRtaW5Qcm9maWxlIiwiaWRDYXJkVXJsIiwiaWRfY2FyZF91cmwiLCJGcmFnbWVudCIsInVuaXZlcnNpdHlOYW1lIiwiZmFjdWx0eU5hbWUiLCJkZXBhcnRtZW50TmFtZSIsImZpZWxkTmFtZSIsImxldmVsTmFtZSIsInNwZWNpYWxpemF0aW9uIiwiYWNhZGVtaWNfdGl0bGUiLCJhZG1pbl90eXBlIiwicGVybWlzc2lvbnMiLCJib3JkZXIiLCJidWlsZE9wdGlvbnMiLCJTdHJpbmciLCJzZWN0aW9uU3R5bGUiLCJVc2VyRWRpdCIsInJlc291cmNlIiwibm90aWNlIiwidXNlTm90aWNlIiwicmVmZXJlbmNlRGF0YSIsInJvbGVPcHRpb25zIiwic3RhdHVzT3B0aW9ucyIsImFjYWRlbWljVGl0bGVPcHRpb25zIiwiZm9ybVN0YXRlIiwic2V0Rm9ybVN0YXRlIiwic3R1ZGVudFVuaXZlcnNpdHlJZCIsInVuaXZlcnNpdHlJZCIsInN0dWRlbnRGYWN1bHR5SWQiLCJmYWN1bHR5SWQiLCJzdHVkZW50RGVwYXJ0bWVudElkIiwiZGVwYXJ0bWVudElkIiwic3R1ZGVudEZpZWxkSWQiLCJmaWVsZElkIiwic3R1ZGVudExldmVsSWQiLCJsZXZlbElkIiwidGVhY2hlclVuaXZlcnNpdHlJZCIsInRlYWNoZXJTcGVjaWFsaXphdGlvbiIsInRlYWNoZXJBY2FkZW1pY1RpdGxlIiwiaXNTYXZpbmciLCJzZXRJc1NhdmluZyIsImhhbmRsZVNhdmUiLCJyZWNvcmRJZCIsInJlc291cmNlSWQiLCJtZXNzYWdlIiwicGF5bG9hZCIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsInVuZGVmaW5lZCIsInJlY29yZEFjdGlvbiIsImFjdGlvbk5hbWUiLCJ1bml2ZXJzaXR5T3B0aW9ucyIsImZhY3VsdHlPcHRpb25zIiwiZmlsdGVyIiwiZmFjdWx0eSIsInVuaXZlcnNpdHlfaWQiLCJkZXBhcnRtZW50T3B0aW9ucyIsImRlcGFydG1lbnQiLCJmYWN1bHR5X2lkIiwiZmllbGRPcHRpb25zIiwiZmllbGQiLCJkZXBhcnRtZW50X2lkIiwibGV2ZWxPcHRpb25zIiwibGV2ZWwiLCJmaWVsZF9pZCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJwcmV2IiwidGFyZ2V0IiwiU2VsZWN0IiwiZmluZCIsIm9wdGlvbiIsIm9wdGlvbnMiLCJzZWxlY3RlZCIsImRpc2FibGVkIiwiQ29uZmlybVVzZXJBY3Rpb24iLCJjb25maXJtVXNlciIsInJlc3BvbnNlIiwiaGFsZiIsImF2YXRhciIsIm1hcmdpblJpZ2h0Iiwicm93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJDb3Vyc2VTaG93IiwiZnVsbCIsImNvZGUiLCJtb2R1bGUiLCJDb3Vyc2VTZWN0aW9ucyIsInNlY3Rpb25zIiwiY291cnNlU2VjdGlvbnMiLCJDb3Vyc2VFbnJvbGxtZW50cyIsImNvdXJzZUVucm9sbG1lbnRzIiwiUHVibGlzaGVyQ2FyZCIsInB1Ymxpc2hlciIsInMiLCJib3JkZXJCb3R0b20iLCJvcmRlciIsIm1hdGVyaWFscyIsIm0iLCJMaW5rIiwibGluayIsIm1heEhlaWdodCIsIm92ZXJmbG93WSIsImUiLCJzdHVkZW50IiwidXNlciIsInVuaXZlcnNpdHkiLCJQb3N0U2hvdyIsImF1dGhvciIsIkRhdGUiLCJjcmVhdGVkX2F0IiwidG9Mb2NhbGVTdHJpbmciLCJwb3N0TWVkaWFzIiwic3RhcnRzV2l0aCIsInVybCIsImNvbnRyb2xzIiwibGlrZXMiLCJsIiwiY29tbWVudHMiLCJjIiwidGFibGUiLCJib3JkZXJDb2xsYXBzZSIsInRoIiwidGV4dEFsaWduIiwidGQiLCJVbml2ZXJzaXR5U2hvd0NoaWxkcmVuIiwic2V0RmFjdWx0aWVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaCIsImpzb24iLCJzaG9ydF9uYW1lIiwicGhvbmUiLCJjaXR5Iiwid2Vic2l0ZSIsInJlbCIsInVwZGF0ZWRfYXQiLCJUYWJsZSIsImYiLCJfY291bnQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJhcyIsIkZhY3VsdHlTaG93Q2hpbGRyZW4iLCJzZXREZXBhcnRtZW50cyIsIkRlcGFydG1lbnRTaG93Q2hpbGRyZW4iLCJzZXRGaWVsZHMiLCJhY2FkZW1pY19zeXN0ZW0iLCJGaWVsZFNob3dDaGlsZHJlbiIsInNldExldmVscyIsImFjdGl2ZSIsImlzQWN0aXZlIiwiY3ljbGUiLCJpc19maW5hbCIsIm1vZHVsZXMiLCJBZG1pbkpTIiwiVXNlckNvbXBvbmVudHMiLCJMb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJ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LEVBQUUsY0FBYztJQUFFOEMsSUFBQUEsS0FBSyxFQUFFb0UsSUFBSSxDQUFDcUQsTUFBTSxDQUFDQyxZQUFZO0lBQUV4SSxJQUFBQSxLQUFLLEVBQUU7SUFBVSxHQUFDLENBQUMsZUFDeEs1QyxzQkFBSyxDQUFDQyxhQUFhLENBQUN1RSxRQUFRLEVBQUU7UUFBRUMsTUFBTSxFQUFFLENBQUEsU0FBQSxFQUFZaEIsV0FBVyxDQUFDcUUsSUFBSSxDQUFDcUQsTUFBTSxDQUFDRSxTQUFTLENBQUMsQ0FBQSxDQUFFO0lBQUV6SyxJQUFBQSxLQUFLLEVBQUUsV0FBVztJQUFFOEMsSUFBQUEsS0FBSyxFQUFFb0UsSUFBSSxDQUFDcUQsTUFBTSxDQUFDRSxTQUFTO0lBQUV6SSxJQUFBQSxLQUFLLEVBQUU7SUFBVSxHQUFDLENBQUMsZUFDL0o1QyxzQkFBSyxDQUFDQyxhQUFhLENBQUN1RSxRQUFRLEVBQUU7UUFBRUMsTUFBTSxFQUFFLENBQUEsU0FBQSxFQUFZaEIsV0FBVyxDQUFDcUUsSUFBSSxDQUFDcUQsTUFBTSxDQUFDRyxXQUFXLENBQUMsQ0FBQSxDQUFFO0lBQUUxSyxJQUFBQSxLQUFLLEVBQUUsYUFBYTtJQUFFOEMsSUFBQUEsS0FBSyxFQUFFb0UsSUFBSSxDQUFDcUQsTUFBTSxDQUFDRyxXQUFXO0lBQUUxSSxJQUFBQSxLQUFLLEVBQUU7SUFBVSxHQUFDLENBQUMsZUFDcks1QyxzQkFBSyxDQUFDQyxhQUFhLENBQUN1RSxRQUFRLEVBQUU7UUFBRUMsTUFBTSxFQUFFLENBQUEsU0FBQSxFQUFZaEIsV0FBVyxDQUFDcUUsSUFBSSxDQUFDcUQsTUFBTSxDQUFDSSxNQUFNLENBQUMsQ0FBQSxDQUFFO0lBQUUzSyxJQUFBQSxLQUFLLEVBQUUsUUFBUTtJQUFFOEMsSUFBQUEsS0FBSyxFQUFFb0UsSUFBSSxDQUFDcUQsTUFBTSxDQUFDSSxNQUFNO0lBQUUzSSxJQUFBQSxLQUFLLEVBQUU7SUFBVSxHQUFDLENBQUMsZUFDdEo1QyxzQkFBSyxDQUFDQyxhQUFhLENBQUN1RSxRQUFRLEVBQUU7UUFBRUMsTUFB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
